const app = require('./backend/config/server')
const next = require('./backend/config/next')
const path = require('path')
const router = require('express').Router()

const load = require('./backend/config/router-autoload')

const dirApi = path.join(__dirname, 'backend/api/')

const middlewares = []

load('/api', dirApi, 'route', middlewares)(app)(router)

next(app)
