import sut from './HttpHeader'
describe('unit test HttpHeader', () => {
  it('should return header with token ', () => {
    const resp = sut(true)
    expect(JSON.stringify(resp)).toContain('token=')
  })

  it('should return header without token', () => {
    const resp = sut(false)
    expect(JSON.stringify(resp)).not.toContain('token=')
  })
})
