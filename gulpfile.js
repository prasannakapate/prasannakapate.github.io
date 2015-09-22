var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    iife = require("gulp-iife");

gulp.task('scripts', function() {
    gulp.src('app/**/*.js')
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('default', ['webserver', 'scripts']);

/////////////
