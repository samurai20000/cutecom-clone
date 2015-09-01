var babel = require('gulp-babel');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('compile', 
    [
        'compile-es6'
    ]
);

gulp.task('compile-es6', function() {
    return gulp.src('src/**/*.js')
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('./app'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['compile']);
});

