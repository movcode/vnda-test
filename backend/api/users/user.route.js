const action = require('./user')
const route = '/user/:id?'

module.exports = router => middleware => {
  router.get(route, action.list)
  router.post(route, action.store)
  router.delete(route, action.remove)
  router.put(route, action.update)
  return router
}
