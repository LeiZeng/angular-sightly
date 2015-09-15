import gulp from 'gulp'

// Views task
gulp.task('views', () => {
  const config = require('../config')
  const browserSync = require('browser-sync')
  //const templateCache = require('gulp-angular-templatecache')

  // Put our index.html in the dist folder
  return gulp.src('app/index.html')
    .pipe(gulp.dest(config.dist.root))

  // Process any other view files from app/views
  //return gulp.src(config.views.src)
  //  .pipe(templateCache({
  //    standalone: true
  //  }))
  //  .pipe(gulp.dest(config.views.dest))
    .pipe(browserSync.stream({ once: true }))
})
