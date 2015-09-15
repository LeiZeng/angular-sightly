import gulp from 'gulp'

gulp.task('components', ['clean'], (cb) => {
  const runSequence = require('run-sequence')
  cb = cb || function() {};

  global.isProd = false;

  runSequence(['sass', 'browserify', 'deploy'], 'watch', cb)
})
