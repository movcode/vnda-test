const express = require('express')
const path = require('path')
const router = require('express').Router()
const bodyParser = require('body-parser')
const cors = require('../middlewares/Cors')

const load = require('./router-autoload')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors)

const port = process.env.PORT || 3000
const server = app.listen(port)
const dirApi = path.join(__dirname, '../api/')

const middlewares = []

load('/api', dirApi, 'route', middlewares)(app)(router)

module.exports = { app, server }
