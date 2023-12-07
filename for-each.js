const forEach = (a, f) => {
    for (let i = 0; i < a.length; i++) {
        f(a[i], i, a)
    }
}