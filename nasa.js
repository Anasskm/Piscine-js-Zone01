function nasa(x){
    let res = ''
    for(let i = 1;i<=x;i++){
        if(i%3 ===0 && i%5 ===0){
            res += 'NASA' + ' '
        }else if(i%3 === 0 && i%5 != 0){
            res += 'NA'+' '
        }else if(i%3 != 0 && i%5 === 0){
            res += 'SA'+ ' '
        }else{
            res += String(i)+' '
        }
    }
    res = res.slice(0,res.length-1)
    return res
}