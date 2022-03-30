const soma = require('./soma');

it('Soma de dois positivos',()=>{
    expect(soma(2,4)).toBe(6)
})
it('Soma positivo e negativo',()=>{
    expect(soma(-2,4)).toBe(2)
})