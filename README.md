# Joy Treasury CLI

a cli for pulling code from joy-treasury project when you need to extend or customize the existing code.

## Installation

**npm**

```bash
npm install joy-treasury -g
```

**yarn**

```bash
yarn global add joy-treasury
```

## Tutorial

1. go to [joy-treasury github](https://github.com/siriwatknp/joy-treasury/tree/next)
2. find a module you want to clone in `packages` (let's say that I want the `packages/template-card-social`)
3. open your terminal and go to your root project directory
4. run `joy-treasury clone template-card-social`
5. you will see that the code is downloaded to `src/joy-treasury` folder (in your local project)

## Usage

```bash
Usage: joy-treasury [options] [command]

Options:
  -v, --version                 output the current version
  -h, --help                    display help for command

Commands:
  init
  clone [options] <sources...>  clone components/styles to your config directory
  help [command]                display help for command
```

### `init`

create a `joy-treasury.config.js` file that will be used when running `clone`.

```bash
joy-treasury init
```

> Note that config file will be overridden by cli options (if specified)

### `clone`

```bash
Usage: joy-treasury clone [options] <sources...>

clone components/styles to your config directory

Options:
  -d, --dir [directory]      destination directory
  -t, --template [template]  template of the files, typescript (default) | javascript
  -b, --branch [branch]      target branch on github
  --storybook                storybook file(s) will be included.
  --test                     test file(s) will be included.
  -h, --help                 display help for command
```

**clone multiple modules**

```bash
joy-treasury clone component-info style-info-apex
```
