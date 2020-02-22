const gulp = require('gulp');
const del = require('del');

function webpackBundle() {
  const webpack = require('webpack-stream');
  
  return gulp.src('./src/main.js')
    .pipe(webpack(require('./webpack/webpack.config.dev.js')))
    .pipe(gulp.dest('./bin/'));
};

function copyHtml() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./bin/'));
};

function clean() {
  return del('./bin/**');
};

exports.webpackBundle = webpackBundle;
exports.copyHtml = copyHtml;
exports.clean = clean;
exports.dev = gulp.parallel(webpackBundle, copyHtml);