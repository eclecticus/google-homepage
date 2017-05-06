const gulp = require('gulp');
const sass = require('gulp-sass');
const bs = require('browser-sync').create();

// BrowserSync task
gulp.task('browserSync', () => {
  bs.init({
    server: {
      baseDir: "./"
    },
  });
});

// Sass task
gulp.task('build-css', () => {
  return gulp.src('src/style/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets/'))
    .pipe(bs.reload({ stream: true}));
});

// Watch task
gulp.task('watch', ['browserSync'], () => {
  gulp.watch('src/style/style.scss', ['build-css'])
  gulp.watch('*.html').on('change', bs.reload);
});

// Default task
gulp.task('default', ['watch'])
