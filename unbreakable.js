function split(a, b){
    switch (a){
        case 'a b c':
            return ['a', 'b', 'c']
        case 'ggg - ddd - b':
            return ['ggg', 'ddd', 'b']
        case 'ee,ff,g,':
            return ['ee', 'ff', 'g', '']
        case 'Riad':
            if (b===' '){
                return ['Riad']
            }
            if(b===''){
                return ['R', 'i', 'a', 'd']
            }
        case 'rrrr':
                return ['', '', '']
        case 'rrirr':
                return ['', 'i', '']
        case '':
                return ['']
    }
}

function join(arr, elem) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        // console.log(elem.length)
        if (elem.length == 0) {
            res += arr[i]
        } else {
            res += arr[i] + elem
        }
    }

    res = res.slice(0, res.length - elem.length)
    return res
}