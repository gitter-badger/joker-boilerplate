'use strict';

var conf = require('./config');
var gulp = require('gulp');


// Copy fonts to dist/
gulp.task('fonts', function () {
  return gulp.src([conf.project.dev + '/assets/fonts/**'])
  .pipe(gulp.dest(conf.project.dest + '/assets/fonts'))
});

// Copy bower_components to dist/
gulp.task('bower_components', function () {
  return gulp.src(conf.project.dev + '/bower_components/**/*.min.js')
  .pipe(gulp.dest(conf.project.dest + '/bower_components'))
});

// Copy favicon
gulp.task('favicon', function () {
  return gulp.src([conf.project.dev + '/favicon.ico'])
  .pipe(gulp.dest(conf.project.dest + '/'))
});


