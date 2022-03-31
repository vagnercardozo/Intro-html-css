export {calculaDelta,calculaBhaskara} 

function calculaDelta(a,b,c) {
    return (Math.pow(b,2))-4*a*c;
}
function calculaBhaskara(a,b,delta){
    let x1,x2;

    x1 = (((-b) - (Math.sqrt(delta))) / (2*a)) 
    x2 = (((-b) + (Math.sqrt(delta))) / (2*a)) 

    return {x1,x2}
}