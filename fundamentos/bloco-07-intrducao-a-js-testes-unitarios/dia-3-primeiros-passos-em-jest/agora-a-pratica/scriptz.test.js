const {myRemove, myFizzBuzz, encode} = require('./scriptz');


describe('testes da funcao myRemove', () => {
  it ('testes iniciais', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([ 1, 2, 3, 4 ]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ]);
  })
})

describe('testes da funcao fizzbuzz', () => {
  it ('testes iniciais', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(11)).toBe(11);
  })
  it ('testes não numero', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  })
})

describe('testes da funcao encode', () => {
  it ('testes iniciais', () => {
    expect(encode('aeiou')).toBe('12345');
    expect(encode('babebibobu')).toBe('b1b2b3b4b5');
    expect(encode('babebibobu').length).toBe(10);
    
    
  })
})