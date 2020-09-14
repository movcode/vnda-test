const fg = require('fast-glob')

const getRoutes = (dir, prefix) => fg.sync(`${dir}**/*${prefix}.js`)

const load = (baseApi, dir, prefix, mid) => app => routerExpress => {
  const routes = getRoutes(dir, prefix)

  if (!baseApi) return console.log('base api empty')
  if (!dir) return console.log('dir file routes empty')
  if (!prefix) return console.log('prefix empty')
  if (routes.length < 1) return console.log('routers not found')

  app.use(baseApi, routes.map(route => require(route)(routerExpress)(mid)))
}

module.exports = load
