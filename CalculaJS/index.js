import { calculaBhaskara, calculaDelta } from './js/calc.js'

document.getElementById('calcular').addEventListener('click', calcular);
document.getElementById('exibirNovamente').addEventListener('click', exibirNovamente);


window.onload = function() {
    document.getElementById('resultado').style.display = "none"
};
function calcular(){
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let delta = calculaDelta(a,b,c);
    let bhaskara = calculaBhaskara(a,b,delta);
    document.getElementById('principal').style.display = "none"
    exibirCalculo()
}
function exibirCalculo(){
    document.getElementById('resultado').style.display = "block"
}
function exibirNovamente(){
    document.getElementById('resultado').style.display = "none"
    document.getElementById('principal').style.display = "block"
}