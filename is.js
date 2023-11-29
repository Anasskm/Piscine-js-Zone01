is.num = function (a) {
    if (typeof (a) == 'number') {
        return true
    }
    return false
}

is.nan = function (a) {
    if (a == NaN) {
        return true
    }
    return false
}
is.str = function (a) {
    if (typeof (a) == 'string') {
        return true
    }
    return false
}
is.bool = function (a) {
    if (typeof (a) == 'boolean') {
        return true
    }
    return false
}
is.undef = function (a) {
    if (a == undefined) {
        return true
    }
    return false
}

is.def = function (a) {
    if (a != undefined) {
        return true
    }
    return false
}
is.arr = function (a) {
    Array.isArray(a)
}
is.obj = function (a) {
    if (typeof (a) == 'object' && !Array.isArray(a)) {
        return true
    }
    return false
}

is.fun = function (a) {
    if (typeof (a) == 'function') {
        return true
    }
    return false
}

is.truthy = function (a) {
    if (a == true) {
        return true
    }
    return false
}

is.falsy = function (a) {
    if (a == false) {
        return true
    }
    return false
}