const adder = (arr, i) => arr.reduce((a, c) => a + c, i ?? 0)

function sumOrMul(arr, i ) {

    const out = arr.reduce((a, c) => c % 2 == 0 ? a * c : a + c, i??0)
    return out
}


const funcExec = (arr, i) => arr.reduce((a, c) => c(a), i??0)