const mult2 = a => function m(b) {
    return a * b
}
const add3 = a => function m(b) {
    return function k(c) {
        return a + b + c
    }

}
const sub4 = a => function m(b) {
    return function k(c) {
        return function j(d){
            return a-b-c-d
        }
    }

}