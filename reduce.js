const fold = (a, f, acc) => {
    for (let i = 0; i < a.length; i++) {
        acc = f(acc, a[i])

    }
    return acc
}


const foldRight = (a, f, acc) => {
    for (let i = a.length - 1; i >= 0; i--) {
        acc = f(acc, a[i])
    }
    return acc
}

const reduce = (a, f) => {
    if (a.length < 1) {
        return Error;

    }
    let acc = a[0]
    for (let i = 1; i < a.length; i++) {
        acc = f(acc, a[i])
    }
    return acc
}

const reduceRight = (a, f) => {
    if (a.length < 1) {
        return Error;

    }
    let acc = a.length - 1
    for (let i = a.length - 2; i >= 0; i--) {
        acc = f(acc, a[i])
    }
    return acc
}