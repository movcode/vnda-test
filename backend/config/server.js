const express = require('express')
const bodyParser = require('body-parser')

const cors = require('../middlewares/Cors')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors)

const port = process.env.PORT || 3000
try {
  app.listen(port)
} catch (err) {
  console.log(err)
  process.exit(1)
}
module.exports = app
