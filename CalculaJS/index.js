import {calculaDelta,calculaBhaskara} from '../js'

function calcular(){
    delta = calculaDelta(2,8,-24)
    bhaskara = calculaBhaskara(2,8,256)

    console.log("testeeeeee")
}
document.getElementById('calcular').addEventListener('click', calcular)
