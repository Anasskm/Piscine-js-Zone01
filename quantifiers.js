const every = (a, f) => {
    for (let i = 0; i < a.length; i++) {
        if (!f(a[i], i, a)) {
            return false
        }

    }
    return true
}


const some = (a, f) => {
    for (let i = 0; i < a.length; i++) {
        if (f(a[i], i, a)) {
            return true
        }

    }
    return false
}

const none = (a, f) => {
    for (let i = 0; i < a.length; i++) {
        if (f(a[i], i, a)) {
            return false
        }

    }
    return true
}