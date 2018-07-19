var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');


gulp.task('ola', function() {
    console.log('ola mundo');
});

gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(concat('app.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
});


gulp.task('default', ['css'])