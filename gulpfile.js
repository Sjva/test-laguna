var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglyfly = require('gulp-uglyfly');


gulp.task('default', function () {
    return gulp.src('css/*.css')
        .pipe(concatCss("styles/bundle.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('bundle/'));
});

gulp.task('scripts', function() {
    return gulp.src(['js/jquery.min.js','js/html5shiv.min.js', 'js/popper.js', 'js/bootstrap.min.js', 'js/jquery.magnific-popup.js', 'js/lib-init.js'])
        .pipe(concat('scripts/all.js'))
        .pipe(uglyfly())
        .pipe(gulp.dest('bundle/'));
});