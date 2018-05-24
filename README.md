# webpack-vue-wx-proj2

> 用于微信生态的脚手架工程

功能:

1.  支持分环境构建 (测试，开发，生产环境)

2.  支持全局配置 ajax 请求的域名

3.  支持微信分享设置配置

4.  支持  微信登录方案

## 代码风格

### 代码格式化工具

本项目是 vue 项目，使用 VSCode Vetur 插件自带的格式化工具进行格式化.

VSCode Vetur 插件地址: [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

文档地址: [Vetur Formatters](https://vuejs.github.io/vetur/formatting.html)

Vetur 插件针对各种不同类型的文件使用的格式化工具:

1.  vue, html 默认不设置格式化工具

    但是可设置为 js-beautify-html, Vetur 插件现在不推荐使用该格式化工具，因为它有长期存在的 bug，也没积极维护，但是又没有其它可选项，作者打算后续使用格式化工具[reshape](https://github.com/reshape/reshape)

    目前因为没有别的格式化工具可选，因此本项目还是选择了 js-beautify-html 格式化工具，这个设置是在.vscode/settings.json 文件中设置

    vue文件中template部分代码的缩进是由vetur.format.defaultFormatterOptions的属性js-beautify-html的属性indent_size决定的，目前设置为2

    可以通过.vscode/settings.json文件来修改这个值

    vetur.format.defaultFormatterOptions的属性js-beautify-html属性的默认值可以查看[vuejs_htmlFormats](https://github.com/vuejs/vetur/blob/master/server/src/modes/template/services/htmlFormat.ts)

2.  css postcss scss less js ts 使用 Vetur 自带的格式化工具 prettier

    prettier 的配置选项在.vscode/settings.json 文件中设置，现在设置的风格有:

    * tabSize=2
    * 不使用';'
    * 不使用双引号，只使用单引号

    因此格式化 js 文件后，会将其中的双引号替换成单引号

    css,js等文件中的缩进大小由.editorconfig 文件中的 indent_size 决定， 而不是由 prettier.tabWidth 决定

    但是vue文件中script 和 style 代码块中的代码的缩进却由.vscode/settings.json 文件中的prettier.tabWidth 决定

    为了更好的修改设置中prettier相关属性的值，建议安装VSCode的插件: [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

3.  stylus 使用 Vetur 自带的格式化工具 stylus-supremacy


还有一个配置文件会影响代码格式化的结果, 根目录下的.editorconfig，会影响所有类型的文件，比如会影响 settings.json 文件的缩进大小

代码格式化的结果会影响 ESLint 的工作，所以代码格式化的结果一定要被 ESLint 所接受，不然每次格式化后 ESLint 都会报错


### ESLint 配置

ESLint 配置的主要文件:

1.  .eslintgignore

    这个文件主要控制忽略哪些文件，不被 ESLint 检查

2.  .eslintrc.js

    这个配置文件主要管理 ESLint 的规则，本项目选的 parser 是 babel-eslint

    本项目还安装了 eslint 的插件 eslint-plugin-vue，代码风格基于 vue 插件的推荐风格，但是因为我们使用的代码格式化工具不会将 html 元素的属性自动拆分成多行，所以 eslint-plugin-vue 的推荐风格的规则: vue/max-attributes-per-line，我们使用代码格式化工具格式化后没法满足，所以我们覆盖了规则，让它可以支持在同一行写多个属性

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
