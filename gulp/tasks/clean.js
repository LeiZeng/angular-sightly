import gulp from 'gulp'

gulp.task('clean', (cb) => {
  const config = require('../config')
  const del = require('del')

  del([config.dist.root], cb)
})
