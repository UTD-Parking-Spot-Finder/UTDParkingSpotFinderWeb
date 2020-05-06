const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');

function copyData() {
  return gulp.src("./data/*")
    .pipe(gulp.dest("./bin/"));
}

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
exports.copyData = copyData;
exports.dev = gulp.parallel(copyData, dev);
exports.prod = gulp.parallel(copyData, prod);
exports.default = prod;