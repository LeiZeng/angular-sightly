import gulp from 'gulp'

gulp.task('less', () => {
  const config = require('../config')
  const gulpif = require('gulp-if')
  const sourcemaps = require('gulp-sourcemaps')
  const less = require('gulp-less')
  const handleErrors = require('../util/handleErrors')
  const browserSync = require('browser-sync')
  const autoprefixer = require('gulp-autoprefixer')
  let createSourcemap = !global.isProd || config.less.prodSourcemap

  return gulp.src(config.less.src)
    .pipe(gulpif(createSourcemap, sourcemaps.init()))
    .pipe(less({
      sourceComments: !global.isProd,
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .on('error', handleErrors)
    .pipe(gulpif(
      createSourcemap,
      sourcemaps.write( global.isProd ? './' : null ))
    )
    .pipe(gulp.dest(config.less.dest))
    .pipe(browserSync.stream({ once: true }))
})
