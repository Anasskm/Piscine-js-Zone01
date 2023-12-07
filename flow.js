const flow = (a) => function c(x) {
    return a.reduce((acc, cur) => cur(acc),x)
}