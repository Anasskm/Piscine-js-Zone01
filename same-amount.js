function sameAmount(a,b,c){
    var b2 = new RegExp(b.source, b.flags +'g')
    var c2 = new RegExp(c.source, c.flags +'g')
    let result1 = [];
    let result2 = [];
    var obj1 = a.match(b2);
    var obj2 = a.match(c2);
    if (obj1!= null){ result1 = Object.values(obj1)}
    if (obj2!= null){ result2 = Object.values(obj2)}
    return result1.length===result2.length
}