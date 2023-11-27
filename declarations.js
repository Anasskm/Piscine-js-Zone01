const escapeStr = "`\/\"'"
const arr = [4 , '2']
const obj = {
    str : "zebi",
    num : 0  ,
    bool : true ,
    undef : undefined 
}

const nested = {
    arr : [4,undefined,'2'],
    obj : {
        str : "zebi",
        num : 0  ,
        bool : true ,
    }
}
Object.freeze(nested)
Object.freeze(obj)
Array.freeze(arr)