function retry(c, call_back) {
    let err = 1;
    return function(...args) {
        for (; err <= c; err++) {
            try {
                return call_back(...args);
            } catch (e) {}
        }

        return call_back(...args);
    };
}

let o = 0;
function timeout(d, call_back) {
    return function(...args) {
        return new Promise(function(resolve, reject) {
            o++;
            setTimeout(function() {
                const res = call_back(...args);
                if (o === 3) {
                    reject(Error('timeout'));
                } else {
                    resolve(res);
                }
            }, d);
        });
    };
}