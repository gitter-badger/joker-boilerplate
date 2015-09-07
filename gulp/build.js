'use strict';

var conf = require('./config');
var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var del = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var replace = require('gulp-replace');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Cleaning dist/ and .tmp/
gulp.task('clean', function () {
  return del([
    'dist',
    '.tmp'
    ]);
});

// Minify html to dist/
gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
  return gulp.src(conf.project.dev + '/*.html')
  .pipe(minifyHTML(opts))
  .pipe(gulp.dest(conf.project.tmp));
});

// Compile sass
gulp.task('sass', function() {
  return gulp.src(conf.project.dev + '/assets/styles/*.scss')
  .pipe(sass({
    errLogToConsole: true
  }))
  .pipe(gulp.dest(conf.project.dev + '/assets/styles'));
});

// Minify styles to dist/
gulp.task('styles', function() {
  return gulp.src(conf.project.dev + '/assets/styles/*.css')
  .pipe(minifyCSS({keepBreaks:false}))
  .pipe(gulp.dest(conf.project.dest + '/assets/styles'))
});

// Minify scripts to dist/
gulp.task('scripts', function() {
  return gulp.src(conf.project.dev + '/assets/scripts/*.js')
  .pipe(uglify())
  .pipe(gulp.dest(conf.project.dest + '/assets/scripts'));
});

// Minify images to dist/
gulp.task('images', function () {
  return gulp.src(conf.project.dev + '/assets/images/**/*')
  .pipe(imagemin({
    progressive: true
  }))
  .pipe(gulp.dest(conf.project.dest + '/assets/images'));
});

// Replace strings in html files/
// gulp.task('replace', function(){
//   gulp.src([conf.project.tmp +'/**/*.html'])
//   .pipe(replace('bower_components/jquery/dist/jquery.js', 'bower_components/jquery/dist/jquery.min.js'))
//   .pipe(replace('bower_components/angular/angular.js', 'bower_components/angular/angular.min.js'))
//   .pipe(gulp.dest(conf.project.dest));
// });

// Build to dist/
gulp.task('default', function(cb) {
  runSequence('clean',
    'favicon',
    'html',
    'styles',
    'scripts',
    'images',
    'fonts',
    // 'replace',
    'bower_components',
    'mailer', cb);
});
