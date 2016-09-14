"use strict";

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', ['styles']);

gulp.task('styles', function () {
    return gulp.src([
        'assets/styles/app.less'
    ])
        .pipe(less());
});