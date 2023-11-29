function multiply(a, b) {
    let result = 0;
    let sign = (a < 0) !== (b < 0) ? -1 : 1;

    a = Math.abs(a);
    b = Math.abs(b);

    for (let i = 0; i < b; i++) {
        result += a;
    }

    return sign * result;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is undefined.");
    }

    let sign = (a < 0) !== (b < 0) ? -1 : 1;

    a = Math.abs(a);
    b = Math.abs(b);

    let quotient = 0;
    while (a >= b) {
        a -= b;
        quotient++;
    }

    return sign * quotient;
}
function modulo(a, b) {
    return a - multiply(divide(a, b), b);
}
