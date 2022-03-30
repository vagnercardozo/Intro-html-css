const calc = require('./calc');

it('Soma de dois positivos',()=>{
    expect(calc.soma(2,4)).toBe(6)
})
it('Soma de dois negativos',()=>{
    expect(calc.soma (-2,4)).toBe(2)
})
it('Subtracao de dois positivos',()=>{
    expect(calc.subtracao(2,4)).toBe(-2)
})
it('Subtracao de dois negativos',()=>{
    expect(calc.subtracao(-2,-4)).toBe(2)
})
it('Multiplicação de dois positivos',()=>{
    expect(calc.multiplicacao(2,4)).toBe(8)
})