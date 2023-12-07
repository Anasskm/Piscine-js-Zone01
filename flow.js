const flow = (f,g) => function c(x){
    return g(f(x))
}