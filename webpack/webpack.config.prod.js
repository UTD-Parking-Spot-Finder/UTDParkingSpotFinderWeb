const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const _ = require('lodash');

const common = require('./webpack.config.common.js');

module.exports = _.merge({
  optimization : {
    minimizer : [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  mode : 'production'
}, common);