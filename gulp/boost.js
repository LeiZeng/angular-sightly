import fs from 'fs'
import path from 'path'

import _ from 'ramda'

import config from './config'

const tasksFileRoot = [
  // load build-in tasks
  path.join(__dirname, './tasks')
]

const tasks = _.chain(
  _.pipe(
    fs.readdirSync,
    _.filter(task => {
      return /(\.(js)$)/i.test(path.extname(task))
    }),
    _.map(task => {
      return require(['./tasks/', task].join(''))
    })
  )
)(tasksFileRoot.concat(config.gulpTaskRoot ? config.gulpTaskRoot : []))

export default tasks
