require('dotenv').config()
const headerWithAuthorization = ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Authorization: process.env.TOKEN
})

const header = ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
})

const HttpHeader = (auth: boolean) => ({ headers: auth ? headerWithAuthorization : header })

export default HttpHeader
