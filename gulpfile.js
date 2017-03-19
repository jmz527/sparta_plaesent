// Load Gulp
var gulp    = require('gulp'),
    gutil   = require('gulp-util');
    plugins = require('gulp-load-plugins')();

// Start Watching: Run "gulp"
gulp.task('default', ['watch']);

// SASS to CSS: Run manually with: "gulp build-css"
gulp.task('build-css', function() {
    return gulp.src('app/sass/*.scss')
        .pipe(plugins.plumber())
        .pipe(plugins.sass())
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer(
            {
                browsers: [
                    '> 1%',
                    'last 2 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
                cascade: false
            }
        ))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('app/public/.')).on('error', gutil.log);
});

// Default task
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.scss', ['build-css']);
});
