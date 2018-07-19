var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var rjs = require('gulp-requirejs');
var babel = require('gulp-babel');



gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'))
});



gulp.task('js', function(){
  return gulp.src('js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', ['js']);