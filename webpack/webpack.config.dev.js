const _ = require('lodash');

const common = require('./webpack.config.common.js');

module.exports = _.merge({
  mode : 'development'
}, common);