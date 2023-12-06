const adder = (arr,i) => arr.reduce((a,c)=>a+c,i)

function sumOrMul(arr, i){
    const  out = arr.reduce((a,c)=> c%2==0 ? a*c : a+c,i)
    return out
}


const funcExec = (arr ,i) => arr.reduce((a,c)=>c(a),i)