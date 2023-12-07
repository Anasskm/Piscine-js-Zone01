const map = (a, f) => {
    let result = []
    for (let i = 0; i < a.length; i++) {
        result.push(f(a[i]))

    }
    return result
}



const flatMap = (a, f) => {
    let result = []
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(f(a[i]))) {
            for (let j = 0; j < f(a[i]).length; j++) {
                result.push(f(a[i])[j])

            }
        } else {
            result.push(f(a[i]))
        }
    }
    return result
}