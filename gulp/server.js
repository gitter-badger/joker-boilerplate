'use strict';

var conf = require('./config');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


// Tasks to run
// Static Server + watching scss/html files on src/
gulp.task('serve', ['sass'], function() {
  browserSync({
    server: conf.project.dev,
    notify: true,
    logPrefix: conf.project.name,
  });

  gulp.watch(conf.project.dev + '/assets/styles/*.scss', ['sass', reload]);
  gulp.watch(conf.project.dev + '/*.html').on('change', reload);
  gulp.watch(conf.project.dev + '/assets/scripts/*.js').on('change', reload);
  gulp.watch(conf.project.dev + '/assets/images/*.{svg, png, jpg, gif}').on('change', reload);
});

// Static Server on dist/
gulp.task('serve:dist', function() {
  browserSync({
    server: conf.project.dest,
    notify: true,
    logPrefix: conf.project.name + ' - distributed',
  });
});