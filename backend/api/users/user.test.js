const request = require('supertest')
const { server, app } = require('../../config/server')

describe('user integration test ', () => {
  afterAll(done => {
    server.close()
    done()
  })

  it('should return error 404 if not send params', async () => {
    await request(app)
      .post('/api/user')
      .expect(404)
  })
})
