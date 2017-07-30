const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('serve', function () {
    browserSync.init({
        server: "./app",
        files: ['app/assets/scripts/*']
    });

    gulp.watch("app/sass/**/*.scss", ['sass']);
    gulp.watch("app/scripts/**/*.js", ['js']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('js', function () {
    return gulp.src('app/scripts/main.js')
        .pipe(gulp.dest('app/assets/scripts'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function () {
    return gulp.src("app/sass/main.scss")
        .pipe(sass().on('error', function (err) {
            console.error(err.message);
            browserSync.notify(err.message, 3000);
            this.emit('end');
        }))
        .pipe(sass())
        .pipe(gulp.dest("app/assets/styles"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);