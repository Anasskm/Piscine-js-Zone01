function letterSpaceNumber(a) {
    let result = []
    let obj = a.match(/([a-zA-z]\s[0-9]{1}(?=[^0-9a-zA-z]|$))/g)
    if (obj!= null){ result = Object.values(obj)}
    return result
}
