import sut from './GetRoleByCode'

describe('unit test GetRole', () => {
  it('should return Agente', () => {
    expect(sut('0')).toBe('Agente')
  })
  it('should return Gestor', () => {
    expect(sut('1')).toBe('Gestor')
  })
  it('should return Local', () => {
    expect(sut('2')).toBe('Local')
  })
})
