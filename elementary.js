function multiply(a, b) {
    let result = 0;
    let sign = (a < 0) === (b < 0) 

    a = Math.abs(a);
    b = Math.abs(b);

    for (let i = 0; i < b; i++) {
        result += a;
    }
    if (sign) {
        return result
    }
    return -result;
}
function divide(a, b) {
    if (b === 0) {
       return Infinity;
    }

    let sign = (a < 0) === (b < 0);

    a = Math.abs(a);
    b = Math.abs(b);

    let quotient = 0;
    while (a >= b) {
        a -= b;
        quotient++;
    }
    if (sign) {
        return quotient
    }
    return -quotient;
}
function modulo(a, b) {
    if (b === 0){
        return NaN
    }
    return a - multiply(divide(a, b), b);
}
