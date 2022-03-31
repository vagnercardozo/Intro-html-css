import { calculaBhaskara, calculaDelta } from './js/calc.js'

function calcular(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let delta = calculaDelta(a,b,c);
    console.log(delta);
    let bhaskara = calculaBhaskara(a,b,delta);
    console.log(bhaskara);
    document.getElementById('x1').innerHTML = '<b>'+bhaskara.x1+'</b>'
    document.getElementById('x2').innerHTML = '<b>'+bhaskara.x2+'</b>'
}
document.getElementById('calcular').addEventListener('click', calcular);
