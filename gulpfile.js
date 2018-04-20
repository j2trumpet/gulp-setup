var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();


// BrowerSync task
// https://browsersync.io/docs/gulp#gulp-sass-css
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./assets/scss/**/*.scss', ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});


// SASS task
gulp.task('sass', function() {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(notify('Styles Processed.'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});


// Default task
gulp.task('default', ['serve']);