import gulp from  'gulp'

gulp.task('images', () => {
  const config = require('../config')
  const changed = require('gulp-changed')
  const gulpif = require('gulp-if')
  const imagemin = require('gulp-imagemin')
  const browserSync = require('browser-sync')

  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest)) // Ignore unchanged files
    .pipe(gulpif(global.isProd, imagemin())) // Optimize
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream({ once: true }))
})
