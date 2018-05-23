'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    EVN_CONFIG: '"dev"',
    API_ROOT: '"https://test-xxx.xxx.com/api/"'  // 开发环境 连正式服  也可以改成本地服务器
})
