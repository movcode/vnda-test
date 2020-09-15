
const list = async (req, res) => {
  res.send('list')
}

const store = async (req, res) => {
  return res.send('create')
}

const remove = async (req, res) => {
  return res.send('remove')
}

const update = async (req, res) => {
  return res.send('update')
}

module.exports = {
  list,
  store,
  remove,
  update
}
