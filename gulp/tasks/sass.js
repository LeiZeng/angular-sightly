import gulp from 'gulp'

gulp.task('sass', () => {
  const config = require('../config')
  const gulpif = require('gulp-if')
  const sourcemaps = require('gulp-sourcemaps')
  const sass = require('gulp-sass')
  const handleErrors = require('../util/handleErrors')
  const browserSync = require('browser-sync')
  const autoprefixer = require('gulp-autoprefixer')

  let createSourcemap = !global.isProd || config.sass.prodSourcemap

  return gulp.src(config.sass.src)
    .pipe(gulpif(createSourcemap, sourcemaps.init()))
    .pipe(sass({
      sourceComments: !global.isProd,
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .on('error', handleErrors)
    .pipe(gulpif(
      createSourcemap,
      sourcemaps.write( global.isProd ? './' : null ))
    )
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.stream({ once: true }))
})
