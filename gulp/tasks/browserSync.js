import gulp from 'gulp'

gulp.task('browserSync', () => {
  const gutil = require('gulp-util')
  const browserSync = require('browser-sync')

  const config = require('../config')

  browserSync({
  	port: config.browserPort,
  	ui: {
    	port: config.UIPort
    },
    proxy: `localhost:${config.serverPort}`
  })
})
