function indexOf(ar, elem, a = 0) {
    for (let i = a; i < ar.length; i++) {
        if (ar[i] === elem) {
            return i
        }
    }
    return -1

}



function lastIndexOf(ar, elem, a = ar.length) {
    for (let i = a - 1; i >= 0; i--) {
        if (ar[i] === elem) {
            return i
        }
    }
    return -1

}



function includes(ar, elem) {
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === elem) {
            return true
        }
    }
    return false

}
