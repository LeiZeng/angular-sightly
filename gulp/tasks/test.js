import gulp from 'gulp'

gulp.task('test', ['server'], () => {
  const runSequence = require('run-sequence')

  console.log('task is starting in:')
  console.log((new Date().getTime() - process.env.startTime) / 1000)

  return runSequence('unit', 'protractor')
})
