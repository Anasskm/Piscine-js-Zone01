function getAcceleration(obj){
    let a1 = obj.f / obj.m
    let a2 = obj.Δv/ obj.Δt
    let a3 = obj.f / obj.m
    if (a1 === a2 && a1=== a3){
        return a1
    }
    return "impossible"

}