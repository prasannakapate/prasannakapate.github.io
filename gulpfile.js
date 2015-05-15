var gulp = require('gulp'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('scripts', function() {
    gulp.src('src/*.js')
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
