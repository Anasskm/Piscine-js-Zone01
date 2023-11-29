function multiply(a, b) {
    if (a<0 && b<0){
        a ,b= -a,-b
    }
    let sign = fale
    if(a<0){
        sign = true
        a = -a
    }
    if(b<0){
        sign = true
        b = -b
    }
    let result = 0
    for (let i = 0; i < b; i++) {
        result += a
    }
    if (!sign){
        return result
    }
    return -result
}


function divide(a, b) {
    if (a<0 && b<0){
        a ,b= -a,-b
    }
    let sign = fale
    if(a<0){
        sign = true
        a = -a
    }
    if(b<0){
        sign = true
        b = -b
    }
    if (b === 0) {
        return Infinity
    }

    let q = 0;
    while (a >= b) {
        a -= b;
        q++;
    }
    if (sign){
        return -q
    }
    return q;
}
function modulo(a, b) {
    return a - multiply(divide(a, b), b);
}
