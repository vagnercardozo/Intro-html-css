const soma = require('./soma');

it('Soma de dois positivos',()=>{
    expect(soma.soma(2,4)).toBe(6)
})
it('Soma de dois negativos',()=>{
    expect(soma.soma (-2,4)).toBe(2)
})
it('Subtracao de dois positivos',()=>{
    expect(soma.subtracao(2,4)).toBe(-2)
})
it('Subtracao de dois negativos',()=>{
    expect(soma.subtracao(-2,-4)).toBe(2)
})
it('Multiplicação de dois positivos',()=>{
    expect(soma.multiplicacao(2,4)).toBe(8)
})