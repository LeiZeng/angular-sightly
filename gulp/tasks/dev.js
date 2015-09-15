import gulp from 'gulp'

gulp.task('dev', ['clean'], (cb) => {
  const runSequence = require('run-sequence')
  cb = cb || function() {};

  global.isProd = false;

  runSequence(['sass', 'views', 'browserify'], 'watch', cb)
})
