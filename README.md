# 👋 Welcome! to Joy Treasury

Joy Treasury is a collection of blocks that are ready-to-use for [Joy UI](https://mui.com/joy-ui/getting-started/) projects.

The blocks are made to live from design inspiration resources such as [Dribbble](https://dribbble.com/) and [Pinterest](https://www.pinterest.com/), etc.

There are 2 way to use the blocks in your project.

- Copy and paste: open the "Doc" of the block you want and copy the code. Then paste it to your project, it should work instantly (open [an issue](https://github.com/siriwatknp/joy-treasury/issues/new) if it does not).
- Use [CLI](#cli) to clone the latest blocks to your project.

## CLI

1. go to [joy-treasury](https://siriwatknp.github.io/joy-treasury/)
2. find a block you want to clone from the sidebar (let's say that I want the `Card/News/Maldives`)
3. open your terminal and go to your root project directory
4. run `npx joy-treasury@latest clone card-news-maldives`
5. you will see that the code is downloaded to `src/joy-treasury` folder (in your local project)

> Note: to clone multiple blocks, just add more names to the command with a space in between, e.g. `npx joy-treasury clone [blocks...]`

```bash
Usage: npx joy-treasury@latest [options] [command]

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
npx joy-treasury@latest init
```

> Note that config file will be overridden by cli options (if specified)

### `clone`

```bash
Usage: npx joy-treasury@latest clone [options] <sources...>

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
npx joy-treasury@latest clone card-news-maldives card-travel-spa
```
