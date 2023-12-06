const adder = (arr, i = arr.length > 0 ? arr[0] : 0) => arr.reduce((a, c) => a + c, i)

function sumOrMul(arr, i = arr.length > 0 ? arr[0] : 0) {

    const out = arr.reduce((a, c) => c % 2 == 0 ? a * c : a + c, i)
    return out
}


const funcExec = (arr, i = arr.length > 0 ? arr[0] : 0) => arr.reduce((a, c) => c(a), i)