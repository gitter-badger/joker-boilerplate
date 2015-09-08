'use strict';

var conf = require('./config');
var gulp = require('gulp');

// Copy fonts to dist/
gulp.task('download', function () {
  return gulp.src([conf.project.dev + '/downloads/**'])
  .pipe(gulp.dest(conf.project.dest + '/downloads'))
});
