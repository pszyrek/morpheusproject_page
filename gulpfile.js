const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglifyjs');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('serve', function () {
    browserSync.init({
        server: "./app/assets",
        files: ['app/assets/scripts/*']
    });

    gulp.watch("app/sass/**/*.scss", ['sass']);
    gulp.watch("app/scripts/**/*.js", ['js']);
    gulp.watch("app/*.html", ['html']);
});

gulp.task('js', function () {
    return gulp.src('app/scripts/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/assets/scripts'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function () {
    return gulp.src("app/sass/main.scss")
        // .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', function (err) {
            console.error(err.message);
            browserSync.notify(err.message, 3000);
            this.emit('end');
        }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest("app/assets/styles"))
        .pipe(browserSync.stream());
});


gulp.task('html', function () {
    return gulp.src('app/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('app/assets'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);