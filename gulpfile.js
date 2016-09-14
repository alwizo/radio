"use strict";

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('default', ['styles']);

gulp.task('styles', function () {
    return gulp.src([
        'assets/styles/app.less'
    ])
        .pipe(less({
            paths: [
                'bower_components/bootstrap/less'
            ]
        }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
    gulp.watch('assets/styles/**/*.less', ['styles']);
});