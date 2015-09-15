import gulp from 'gulp'

gulp.task('gzip', () => {
  const gzip   = require('gulp-gzip')
  const config = require('../config')

  return gulp.src(config.gzip.src)
    .pipe(gzip(config.gzip.options))
    .pipe(gulp.dest(config.gzip.dest))
})
