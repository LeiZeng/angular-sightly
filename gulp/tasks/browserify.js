import gulp from 'gulp'

const config = require('../config')

function buildScript(file) {
  const gulpif = require('gulp-if')
  const gutil = require('gulp-util')
  const source = require('vinyl-source-stream')
  const sourcemaps = require('gulp-sourcemaps')
  const buffer = require('vinyl-buffer')
  const streamify = require('gulp-streamify')
  const watchify = require('watchify')
  const browserify = require('browserify')
  const uglify = require('gulp-uglify')
  const browserSync = require('browser-sync')

  const handleErrors = require('../util/handleErrors')

  let bundler = browserify({
    entries: config.browserify.entries,
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: !global.isProd
  })

  if ( !global.isProd ) {
    bundler = watchify(bundler)
    bundler.on('update', function() {
      rebundle()
    })
  }

  function rebundle() {
    let stream = bundler.bundle()
    let createSourcemap = global.isProd && config.browserify.prodSourcemap

    gutil.log('Rebundle...')

    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulpif(createSourcemap, buffer()))
      .pipe(gulpif(createSourcemap, sourcemaps.init()))
      .pipe(gulpif(global.isProd, streamify(uglify({
        compress: { drop_console: true }
      }))))
      .pipe(gulpif(createSourcemap, sourcemaps.write('./')))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.stream({ once: true }))
  }

  return rebundle()

}

gulp.task('browserify', () => buildScript(config.browserify.bundleName))
