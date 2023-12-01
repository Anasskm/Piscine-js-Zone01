function cutFirst(a){
    return a.slice(2)
}
function cutLast(a){
    return a.slice(0,-2)
}
function cutFirstLast(a){
    return a.slice(2,-2)
}
function keepFirst(a){
    return a.slice(0,2)
}
function keepLast(a){
    return a.slice(-2)
}
function keepFirstLast(a){
    if (a.length>4){
    return (keepFirst(a)+keepLast(a))
    }else {
        return a
    }
}