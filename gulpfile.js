var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')(); //configuration file for gulp
var $ = require('gulp-load-plugins')({
    lazy: true
});

// var jshint = require('jshint');
// var jscs = require('jscs');
// var util = require('gulp-util');
// var gulpprint = require('gulp-print');
// var gulpif = require('gulp-if');
// gulp-less , gulp-autoprefixer

//task for analyszing the source code with JSCS and JSHINT
gulp.task('vet', function() {
    log('Analyzing source with JSCS and JSHINT');
    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe($.jshing.reporter('fail'));
});

//task to convert less into css
gulp.task('styles', function() {
    log('compiling less to css');

    return gulp
        .src(config.less)
        .pipe($.less())
        .pipe($.autoprefixer({browser: ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});


/////////////

// function clean(path, done) {
//     log('Cleaning: ' + $.util.color.blue(path));
//     del(path, done);
// }

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

/*gulp vet --verbose*/
