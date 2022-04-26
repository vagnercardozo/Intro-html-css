export { calculaDelta, calculaBhaskara };

function calculaDelta(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}
function calculaBhaskara(a, b, delta) {
  if (delta == 0) {
    let x1 = -b / (2 * a);
    return { x1 };
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return { x1, x2 };
  }
}
