const merge = require('webpack-merge')

const devdEnv = require('./dev.env')

module.exports = merge(devdEnv, {
  NODE_ENV: '"testing"'
})