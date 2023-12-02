function groupPrice(a){
    var result = []
    var obj = a.match(/((USD)|\$)[0-9]+(\.)[0-9]{2}/g)
    if (obj!=null){for (var i =0;i<Object.values(obj).length;i++){result.push([Object.values(obj)[i]])}}else{return[]}
    if (result!=null){
    for (var i =0;i<result.length;i++){
        result[i].push(result[i][0].replace(/((USD)|\$)/,"").replace(/(\.)[0-9]{2}/,""))
        result[i].push(result[i][0].replace(/((USD)|\$)[0-9]+(\.)/,""))
    }}
    return  result
}