const sum = require('./sum');

describe('testes da funcao soma', () => {
  it('soma de dois elemento', () => {
    expect(sum(4, 5)).toBe(9);
  })
})