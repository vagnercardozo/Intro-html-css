import {soma, subtracao, multiplicacao, divisao} from './calc'

it('Soma de dois positivos',()=>{
    expect(soma(2,4)).toBe(6)
})
it('Soma de dois negativos',()=>{
    expect(soma (-2,4)).toBe(2)
})
it('Subtracao de dois positivos',()=>{
    expect(subtracao(2,4)).toBe(-2)
})
it('Subtracao de dois negativos',()=>{
    expect(subtracao(-2,-4)).toBe(2)
})
it('Multiplicação de dois positivos',()=>{
    expect(multiplicacao(2,4)).toBe(8)
})
it('Divisão de dois positivos',()=>{
    expect(divisao(4,2)).toBe(2)
})