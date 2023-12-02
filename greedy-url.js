function getURL(a){
    return $getURL
}
function greedyQuery(a){
    var result = []
    var obj = a.match(/(?<=\s)(http(s?):\/\/(www.)?[a-z0-9_-]+.[^\s]+(\?)[^\s]+(\?)[^\s]+(\?)[^\s]+)/g)
    if (obj!=null){result = Object.values(obj)}
    return $greedyQuery
}
function notSoGreedy(a){
    return $notSoGreedy
}
