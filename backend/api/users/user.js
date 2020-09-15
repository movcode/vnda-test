const repo = require('./user.repository')
const { errors } = require('../../custom/')

const list = async (req, res) => {
  const response = await repo.list()
  return res.send(response)
}

const store = async (req, res) => {
  const { email, name, role_name, external_code, tags } = req.body
  if (!email || !name || !role_name || !external_code || !tags) return errors(res).error404('params not found')

  const response = await repo.store({ email, name, role_name, external_code, tags })
  if (!response) return errors(res).error500('error server')

  return res.send(response)
}

const remove = async (req, res) => {
  const { id } = req.params
  if (!id) return errors(res).error404('id not found')

  const response = await repo.remove(id)

  return res.send(response)
}

const update = async (req, res) => {
  const { id } = req.params
  if (!id) return errors(res).error404('id not found')

  return res.send(id)
}

module.exports = {
  list,
  store,
  remove,
  update
}
