import gulp from 'gulp'

gulp.task('server', () => {
  const config = require('../config')
  const http = require('http')
  const express = require('express')
  const serveIndex = require('serve-index')
  // const serveStatic = require('serve-static')
  const gutil = require('gulp-util')
  // const morgan = require('morgan')

  let server = express()

  // log all requests to the console
  // server.use(morgan('dev'))
  server.use(express.static(config.dist.root))
  server.use(serveIndex(config.dist.root, {'icons': true}))

  // Start webserver if not already running
  let s = http.createServer(server)
  s.on('error', (err) => {
    if(err.code === 'EADDRINUSE'){
      gutil.log(`Development server is already started at port ${config.serverPort}`)
    }
    else {
      throw err
    }
  })

  s.listen(config.serverPort)
})
