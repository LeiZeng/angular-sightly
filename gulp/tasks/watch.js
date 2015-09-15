import gulp from 'gulp'

gulp.task('watch', ['browserSync', 'server'], () => {
  var config = require('../config')

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['lint'])
  gulp.watch(config.sass.src,  ['sass'])
  gulp.watch(config.images.src,  ['images'])
  gulp.watch(config.fonts.src,   ['fonts'])
  gulp.watch(config.views.watch, ['views'])
  gulp.watch(config.deploy.src, ['deploy'])
})
