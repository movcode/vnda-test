const { HttpClient } = require('../../services')

const path = 'users'

const list = async () => {
  try {
    const res = await HttpClient().get(path, true)
    return res.data
  } catch (error) {
    console.log(error)
    return false
  }
}
const store = async data => {
  try {
    const res = await HttpClient().post(path, data, true)
    return res.data
  } catch (error) {
    console.log(error)
    return false
  }
}

const remove = async id => {
  try {
    const res = await HttpClient().remove(`${path}/${id}`, true)
    return res.data
  } catch (error) {
    console.log(error)
    return false
  }
}

const update = async (id, data) => {
  try {
    const res = await HttpClient().update(`${path}/${id}`, data, true)
    return res.data
  } catch (error) {
    console.log(error.response)
    return 'error'
  }
}

module.exports = { list, store, remove, update }
