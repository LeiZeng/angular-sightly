import gulp from 'gulp'

gulp.task('exercises', ['browserSync'], () => {
  const browserSync = require('browser-sync')
  const config = require('../config')
  const http = require('http')
  const express = require('express')
  const serveIndex = require('serve-index')

  let server = express()

  server.use(express.static(config.exercises.root))
  server.use(serveIndex(config.exercises.root, {'icons': true}))

  let s = http.createServer(server)

  s.listen(config.serverPort)

  gulp.watch(config.watch, () => {
    browserSync.reload()
  })
})
