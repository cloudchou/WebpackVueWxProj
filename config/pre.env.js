'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
    NODE_ENV: '"presentation"',
    EVN_CONFIG: '"pre"',
    API_ROOT: '"https://pre-xxx.xxx.com/api/"'  //预发布环境
})
