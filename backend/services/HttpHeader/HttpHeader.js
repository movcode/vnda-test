require('dotenv').config()

const headerWithAuthorization = ({
  'Content-Type': 'application/json',
  Authorization: process.env.TOKEN
})

const header = ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
})

const HttpHeader = (auth) => ({ headers: auth ? headerWithAuthorization : header })

module.exports = HttpHeader
