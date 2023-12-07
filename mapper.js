const map = (f, a) => {
    const result = []
    a.forEach(element => {
        result.push(f(element))
    });
    return result
}



const flatMap = (f, a) => {
    const result = []
    a.forEach(element => {
        if (Array.isArray(f(element))) {
            f(element).forEach(e => {
                result.push(e)

            });
        } else {
            result.push(f(element))
        }
    });
    return result
}