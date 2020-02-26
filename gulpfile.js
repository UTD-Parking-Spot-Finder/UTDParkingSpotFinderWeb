const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');

function dev() {
  return gulp.src('./src/main.js')
    .pipe(webpack(require('./webpack/webpack.config.dev.js')))
    .pipe(gulp.dest('./bin/'));
};

function prod() {
  return gulp.src('./src/main.js')
    .pipe(webpack(require('./webpack/webpack.config.prod.js')))
    .pipe(gulp.dest('./bin/'));
};

function clean() {
  return del('./bin/**');
};

exports.clean = clean;
exports.dev = dev;
exports.prod = prod;
exports.default = prod;