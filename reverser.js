function reverse(a){
    var result = []
    for (var i=a.length-1;i>=0;i--){
        result.push(a[i])
    }
    return a instanceof Array ? result : result.join('')
}