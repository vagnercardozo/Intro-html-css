import { calculaBhaskara, calculaDelta } from "./js/calc.js";

document.getElementById("calcular").addEventListener("click", calcular);
document
  .getElementById("exibirNovamente")
  .addEventListener("click", exibirNovamente);

window.onload = function () {
  document.getElementById("resultado").style.display = "none";
};
function calcular() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  let delta = calculaDelta(a, b, c);
  if (delta >= 0) {
    let bhaskara = calculaBhaskara(a, b, delta);
    document.getElementById("x1").innerHTML = "x1 = " + bhaskara.x1;
    if (bhaskara.x2) {
      document.getElementById("x2").innerHTML = "x2 = " + bhaskara.x2;
    }       
  } else {
    document.getElementById("x1").innerHTML = "Equação não possui raizes";
    document.getElementById("x2").innerHTML = "";
  }
  document.getElementById("resultado").style.display = "block";
}
