const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const appNext = next({ dev })
const handle = appNext.getRequestHandler()

module.exports = async (app) => {
  try {
    await appNext.prepare()
    app.get('*', (req, res) => handle(req, res))
    return true
  } catch (err) {
    return false
  }
}
