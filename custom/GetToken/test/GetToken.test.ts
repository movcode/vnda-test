import sut from '../GetToken'
require('dotenv').config()

const mockStorage: Storage = ({
  length: 1,
  key: (index: number) => '',
  getItem: function (key: string) {
    return 'test_token'
  },
  setItem: function (key: string, value: string) {

  },
  clear: function () {

  },
  removeItem: function (key) { }
})

describe('Unit test getToken backend and frontend', () => {
  it('should return token for frontend', () => {
    const resp = sut(mockStorage, null)
    expect(resp).toBe('test_token')
  })

  it('should return token for backend', () => {
    const resp = sut(null, process)
    expect(resp).toContain('token=')
  })
})
