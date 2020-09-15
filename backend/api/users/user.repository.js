const { HttpClient } = require('../../services')

const path = 'users'

const list = async () => {
  try {
    const res = await HttpClient().get('users', true)
    return res.data
  } catch (error) {
    console.log(error)
    return false
  }
}
const store = async data => {
  try {
    const res = await HttpClient().post('users', data, true)
    return res.data
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = { list, store }
