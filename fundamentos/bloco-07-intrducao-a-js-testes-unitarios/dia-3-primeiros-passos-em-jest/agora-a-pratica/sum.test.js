const sum = require('./sum.js');
// const myRemove = require('./sum');



describe('testes da funcao soma', () => {
  it('soma de dois elemento', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);    
  })
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})

