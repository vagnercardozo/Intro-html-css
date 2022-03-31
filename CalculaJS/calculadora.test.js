import {calculaDelta,calculaBhaskara} from './js/calc'

it('Delta',()=>{
    expect(calculaDelta(2,8,-24)).toBe(256)
})
it('Bhaskara',()=>{
    expect(calculaBhaskara(2,8,256)).toEqual({x1: -6,x2: 2})
})