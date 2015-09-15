import gulp from 'gulp'
import _ from 'ramda'
const TASK_NAME = 'checkCoverage'

const defaultConfig = {
  'entry': [
    'src/services/__test__/*.spec.js'
  ],
  'src': [
    'src/services/*.js'
  ],
  'options': {
    'reporter': 'spec'
  }
}

const coverageReportPath = 'node_modules/coverageReport/'

let conf = defaultConfig
const task = gulp.task(TASK_NAME, () => {
  const gutil = require('gulp-util')
  const mocha = require('gulp-mocha')
  const path = require('path')
  const mergeSteam = require('merge-stream')
  const istanbul = require('gulp-istanbul')
  const babel = require('gulp-babel')
  const watcher = require('../util/watcher')

  function bundle() {
    process.env.NODE_ENV = 'test'

    return gulp.src(conf.src)
      .pipe(babel())
      .pipe(istanbul({
        includeUntested: true,
      }))
      .pipe(istanbul.hookRequire())
      .on('finish', () => {
        gulp.src(conf.entry)
          .pipe(mocha(conf.options))
          .pipe(istanbul.writeReports({
            dir: coverageReportPath,
            reporters: ['cobertura', 'text', 'text-summary'],
            reportOpts: {
              dir: coverageReportPath
            }
          }))
          .pipe(istanbul.enforceThresholds({
            thresholds: {
              global: 80
            }
          }))
          .once('error', function(err) {
            gutil.log(err.message)
            process.exit(1)
          })
          .on('end', () => {
            process.exit()
          })
      })
      .pipe(watcher.pipeTimer(TASK_NAME))
  }

  if (watcher.isWatching()) {
    gulp.watch([].concat(conf.src), function(evt) {
      gutil.log(evt.path, evt.type)
      bundle()
    })
  }

  return bundle()
})
