#!/usr/bin/env node

import got from 'got';
import fs from 'fs';
import cpy from 'cpy';
import chalk from 'chalk';
import rimraf from 'rimraf';
import * as tar from 'tar';
import { Stream } from 'stream';
import { promisify } from 'util';
import checkForUpdate from 'update-check';
import { execSync } from 'child_process';
import { cosmiconfig } from 'cosmiconfig';
import { CloneOptions, createProgram } from './program';
// @ts-ignore
import packageJson from '../package.json';

const pipeline = promisify(Stream.pipeline);

const TEMPLATE_FOLDER_MAP = {
  typescript: 'src',
  javascript: 'javascript',
};
const JOY_TREASURY_CONFIG_FILE = 'joy-treasury.config.js';
const DEFAULT_CONFIG = {
  dir: 'src/joy-treasury',
  template: 'typescript',
  storybook: false,
  test: false,
  branch: 'main',
} as const;
const CONFIG_FILE_TEMPLATE = `export default {
  dir: "${DEFAULT_CONFIG.dir}",
  template: "${DEFAULT_CONFIG.template}",
  storybook: ${DEFAULT_CONFIG.storybook},
  test: ${DEFAULT_CONFIG.test},
  branch: ${DEFAULT_CONFIG.branch},
};
`;

const cloneParams: {
  sources: string[];
  options: CloneOptions | undefined;
} = {
  sources: [],
  options: undefined,
};

const logger = {
  log: (...text: string[]) => {
    console.log(chalk.bgHex('D4D4D8').hex('3F3F46')('joy-treasury'), ...text);
  },
  info: function(text: string | ((t: typeof chalk) => string)) {
    this.log(
      chalk.bold(chalk.green('info')),
      typeof text === 'function' ? text(chalk) : text
    );
  },
  config: function(text: string | ((t: typeof chalk) => string)) {
    this.log(
      chalk.bold(chalk.hex('0284C7')('config')),
      typeof text === 'function' ? text(chalk) : text
    );
  },
  success: function(text: string | ((t: typeof chalk) => string)) {
    this.log(
      chalk.bold(chalk.green('success')),
      typeof text === 'function' ? text(chalk) : text
    );
  },
  version: function() {
    this.log(
      chalk.bold(chalk.hex('F59E0B')('version')),
      chalk.bold(chalk.yellow(`v${packageJson.version}`))
    );
  },
};

async function getConfigFile(overrides?: Partial<CloneOptions>) {
  try {
    const explorer = cosmiconfig('joy-treasury');
    const config: CloneOptions = (await explorer.search())?.config;
    logger.version();
    logger.info('using config from joy-treasury.config.js');
    return { ...config, ...overrides };
  } catch (error) {
    logger.info('config file not found, use default config');
    logger.info(
      chalk.blue('{ dir: "src/joy-treasury", storybook: false, test: false }')
    );
  }
  return { ...DEFAULT_CONFIG, ...overrides };
}

function downloadAndExtractCode(
  root: string,
  sources: string[],
  branch: string
): Promise<void> {
  return pipeline(
    got.stream(
      `https://codeload.github.com/siriwatknp/joy-treasury/tar.gz/${branch}`
    ),
    tar.extract(
      { cwd: root, strip: 2 },
      sources.map(src => `joy-treasury-${branch}/stories/${src}`)
    )
  );
}
function downloadTemplates(
  root: string,
  sources: string[],
  branch: string,
  folder: 'src' | 'javascript'
): Promise<void> {
  return pipeline(
    got.stream(
      `https://codeload.github.com/siriwatknp/joy-treasury/tar.gz/${branch}`
    ),
    tar.extract(
      { cwd: root, strip: 4 },
      sources.map(
        (
          src // src is 'template-component-style' => 'component/style'
        ) =>
          `joy-treasury-${branch}/packages/templates/${folder}/${src
            .replace('template-', '')
            .replace('-', '/')}`
      )
    )
  );
}

function removeDir(dir: string) {
  return new Promise((resolve, reject) => {
    rimraf(dir, (error: any) => {
      if (!error) {
        resolve(undefined);
      } else {
        reject(error);
      }
    });
  });
}

const update = checkForUpdate(packageJson).catch(() => null);

function shouldUseYarn(): boolean {
  try {
    const userAgent = process.env.npm_config_user_agent;
    if (userAgent) {
      return Boolean(userAgent && userAgent.startsWith('yarn'));
    }
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

async function notifyUpdate(): Promise<void> {
  try {
    const res = await update;
    if (res?.latest) {
      const isYarn = shouldUseYarn();

      console.log();
      console.log(
        chalk.yellow.bold('A new version of `joy-treasury` is available!')
      );
      console.log(
        'You can update by running: ' +
          chalk.cyan(
            isYarn ? 'yarn global add joy-treasury' : 'npm i -g joy-treasury'
          )
      );
      console.log();
    }
    process.exit();
  } catch {
    // ignore error
  }
}

const program = createProgram({
  commands: {
    clone: (sources, options) => {
      cloneParams.sources = sources;
      cloneParams.options = options;
    },
    init: () => {
      fs.writeFile(JOY_TREASURY_CONFIG_FILE, CONFIG_FILE_TEMPLATE, function(
        err
      ) {
        if (err) throw err;
        logger.success(`${JOY_TREASURY_CONFIG_FILE} is created! 🎉`);
      });
    },
  },
});

program.parse(process.argv);

async function runCloneCommand() {
  const config = await getConfigFile(cloneParams.options);
  if (config.dir && !config.dir.startsWith('/')) {
    config.dir = `/${config.dir}`;
  }
  for (let field of Object.entries(config)) {
    logger.config(`"${field[0]}: ${field[1]}"`);
  }
  const tempRoot = process.cwd() + '/joy-treasury-tmp';
  const tempTemplateRoot = process.cwd() + '/joy-treasury-template-tmp';
  const actualRoot = process.cwd() + config.dir;
  if (!fs.existsSync(tempRoot)) {
    fs.mkdirSync(tempRoot, { recursive: true });
  }
  if (!fs.existsSync(tempTemplateRoot)) {
    fs.mkdirSync(tempTemplateRoot, { recursive: true });
  }
  logger.info(
    `start cloning ${chalk.bold(cloneParams.sources.length)} packages...`
  );
  const templateSources = cloneParams.sources.filter(s =>
    s.startsWith('template')
  );
  const nonTemplateSources = cloneParams.sources.filter(
    s => !s.startsWith('template')
  );
  if (nonTemplateSources.length) {
    await downloadAndExtractCode(tempRoot, nonTemplateSources, config.branch);
  }
  if (templateSources.length) {
    await downloadTemplates(
      tempTemplateRoot,
      templateSources,
      config.branch,
      config.template === 'typescript' ? 'src' : 'javascript'
    );
  }
  const excludedFiles = [
    ...(!config.storybook ? [`!${tempRoot}/**/*.stories.*`] : []),
    ...(!config.test ? [`!${tempRoot}/**/*.test.*`] : []),
  ];
  logger.info('finishing things up...');
  await Promise.all(
    nonTemplateSources.map(mod =>
      cpy(
        [
          // default template is typescript (ts codes live in "src" folder)
          `${tempRoot}/${mod}/${TEMPLATE_FOLDER_MAP[config.template]}/*`,
          ...excludedFiles,
        ],
        `${actualRoot}/${mod}`,
        {
          overwrite: true,
        }
      )
    )
  );
  await Promise.all(
    templateSources.map(mod => {
      const [, component, style] = mod.split('-');
      return cpy(
        `${tempTemplateRoot}/${component}/${style}/*`,
        `${actualRoot}/${mod}`,
        { overwrite: true }
      );
    })
  );

  // clean up temp folder
  await Promise.all([removeDir(tempRoot), removeDir(tempTemplateRoot)]);
  logger.log(chalk.bold(chalk.green('✅ cloned successfully!')));
}

if (cloneParams.sources.length) {
  runCloneCommand()
    .then(notifyUpdate)
    .catch(error => {
      throw error;
    });
}
