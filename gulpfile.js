const gulp = require('gulp');
const bs = require('browser-sync').create();

gulp.task('browserSync', () => {
  bs.init({
    server: {
      baseDir: "./"
    },
    proxy: "localhost:7777"
  });
});
