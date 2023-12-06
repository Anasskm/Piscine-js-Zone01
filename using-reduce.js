const adder = arr => arr.reduce((a,c)=>a+c)

function sumOrMul(arr, i){
    const  out = arr.reduce((a,c)=> c%2==0 ? a*c : a+c,i)
    return out
}


const funcExec = (arr ,i) => arr.reduce((a,c)=>c(a),i)