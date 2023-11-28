function isPositive(n){
    n=parseFloat(n)
    if(n>0){
        return true
    }
    return false 

}
function abs(n){
    if (n==0){
        return parseFloat(0)
    }
    if(isPositive(n)){
        return n
    }   
    return -n
}