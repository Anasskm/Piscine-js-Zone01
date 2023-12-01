function indexOf(elem, a = 0) {
    for (let i = a; i < this.length; i++) {
        if (this[i] === elem) {
            return i
        }
    }
    return -1

}
Array.prototype.indexOf = indexOf


function lastIndexOf(elem, a = this.length) {
    for (let i = a - 1; i >= 0; i--) {
        if (this[i] === elem) {
            return i
        }
    }
    return -1

}
Array.prototype.lastIndexOf = lastIndexOf


function includes(elem) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === elem) {
            return true
        }
    }
    return false

}
Array.prototype.includes = includes
