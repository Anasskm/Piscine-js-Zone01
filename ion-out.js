function ionOut(a){
    var result = []
    var obj = a.match(/[0-9a-zA-Z]*(?<=t)(ion)[0-9a-zA-Z]*/g)
    if (obj!=null){result = Object.values(obj)}
    for (var i =0;i<result.length;i++){
        result[i] = result[i].replace(/(ion)/,'')
        console.log(result[i])
    }
    return  result
}