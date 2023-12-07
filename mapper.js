const map = (a, f) => {
    let result = []
    for (let i = 0; i < a.length; i++) {
        result.push(f(a[i],i,a))

    }
    return result
}



const flatMap = (a, f) => {
    let result = []
    for (let i = 0; i < a.length; i++) {
        let r = f(a[i],i,a)
        if (Array.isArray(r)) {
            for (let j = 0; j < r.length; j++) {
                result.push(r[j])

            }
        } else {
            result.push(r)
        }
    }
    return result
}