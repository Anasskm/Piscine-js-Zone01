function multiply(a, b) {
    let result = 0
    for (let i = 0; i < b; i++) {
        result += a
    }
    return result
}


function divide(a, b) {
    if (b === 0) {
        return Infinity
    }

    let q = 0;
    while (a >= b) {
        a -= b;
        q++;
    }

    return q;
}
function modulo(a, b) {
    return a - multiply(divide(a, b), b);
}
