require('dotenv').config()
const headerWithAuthorization = ({
  'Content-Type': 'application/json',
  Authorization: process.env.TOKEN
})

const header = ({
  'Content-Type': 'application/json'
})

export default (auth: boolean) => ({ headers: auth ? headerWithAuthorization : header })
