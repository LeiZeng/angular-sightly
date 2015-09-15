import gulp from 'gulp'

gulp.task('fonts', () => {
  const config = require('../config')
  const changed = require('gulp-changed')
  const browserSync = require('browser-sync')

  return gulp.src(config.fonts.src)
    .pipe(changed(config.fonts.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.stream({ once: true }))
})
