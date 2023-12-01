function getAcceleration(obj) {
    let a1 = obj.f / obj.m
    let a2 = obj.Δv / obj.Δt
    let a3 = (2 * obj.d) / (obj.t * obj.t)
    if (a1 === a2 && a1 === a3) {
        return parseFloat(a1)
    }
    return "impossible"

}