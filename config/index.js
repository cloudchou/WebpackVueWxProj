'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    //开发时使用的配置
    dev: {

        // Paths
        // 开发时使用的server是webpack-dev-server，不生成任何文件 都在内存里 所以没有assetsRoot选项
        // assetsRoot: path.resolve(__dirname, '../dist'), 
        // CopyWebpackPlugin copy root static to this dir || utils.assetsPath then loader option name 
        // 资源文件都会拷贝到这个目录下 非开发模式下构建的js也会拷贝到这个目录下
        assetsSubDirectory: 'static',
        // webpack: output.publicPath 
        // https://webpack.js.org/configuration/output/#output-publicpath
        // 应该是生成的js,html,css文件里引用其它资源时 使用的资源路径前缀 比如可以设置为:https://cdn.example.com/static
        assetsPublicPath: '/',
        proxyTable: {},

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        // devtool: 'cheap-module-eval-source-map',
        devtool: "souce-map",

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    // 构建时用的配置
    build: {
        // 分环境构建的配置
        prodEnv: require('./prod.env'),
        preEnv: require('./pre.env'),
        testEnv: require('./test.env'),
        devEnv: require('./dev.env'),

        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        // webpack: output.path 
        // wepack打包时生成的文件都会放到这个目录下，开发时npm run dev不会生成任何实际的文件
        assetsRoot: path.resolve(__dirname, '../dist'),
        // CopyWebpackPlugin copy root static to this dir || utils.assetsPath then loader option name
        // 资源文件都会拷贝到这个目录下 非开发模式下构建的js也会拷贝到这个目录下
        assetsSubDirectory: 'static',
        // webpack: output.publicPath 
        // https://webpack.js.org/configuration/output/#output-publicpath
        // 应该是生成的js,html,css文件里引用其它资源时 使用的资源路径前缀 比如可以设置为:https://cdn.example.com/static
        assetsPublicPath: '/',

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
