"use strict";

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

gulp.task('default', ['connect', 'watch', 'styles']);

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        livereload: true
    });
});

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
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('assets/styles/**/*.less', ['styles']);
});