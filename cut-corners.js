function modulo(v1, v2) {
    var namir = v1 < 0 ? -1 : 1;
    var di = Math.abs(v1);
    var d = Math.abs(v2);
    if (di === 0) {
        return 0;
    }
    if (d === 0 || isNaN(di) || isNaN(d)) {
        return NaN;
    }
    if (di < d) {
        return (namir * di);
    }
    var elem_h1 = di;
    while (elem_h1 >= d) {
        elem_h1 = elem_h1 - d;
    }
    return namir * elem_h1;
}

function round(a) {
    var nb = a;
    if (nb < 0) {
        nb = -nb
    }
    if (nb > 68719476735) {
        for (var i = 68719476735; i <= nb; i++) {
            if (nb - i <= 1) {
                dec = nb - i;
            }
        }
    } else {
        var dec = modulo(nb, 1);
    }
    var s = 0.5;
    if (dec >= s) {
        nb++
    }
    if (a < 0) {
        return -(nb - dec)
    } else {
        return nb - dec
    }
}

function ceil(a) {
    var s = round(a) >= a ? round(a) : round(a) + 1;
    return s
}

function floor(a) {
    var s = round(a) <= a ? round(a) : round(a) - 1;
    return s
}

function trunc(a) {
    var nb = a;
    if (nb < 0) {
        nb = -nb
    }
    if (nb > 68719476735) {
        for (var i = 68719476735; i <= nb; i++) {
            if (nb - i <= 1) {
                dec = nb - i;
            }
        }
    } else {
        var dec = modulo(nb, 1);
    }
    if (a < 0) {
        return -(nb - dec)
    } else {
        return nb - dec
    }
}
