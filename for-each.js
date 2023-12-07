const forEach = (a, f) => {
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        f(element)

    }
}