import gulp from 'gulp'

// deploy task
gulp.task('deploy', () => {
  const config = require('../config')

  // Put our index.html in the dist folder
  return gulp.src(config.deploy.src)
    .pipe(gulp.dest(config.deploy.root))
})
