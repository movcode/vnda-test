import sut from '../GetTokenAdapter'
require('dotenv').config()

describe('unit test getTokenAdapter', () => {
  it('should return token for backend', () => {
    expect(sut).toContain('token=')
  })
})
