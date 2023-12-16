async function race(promises_h = []) {
    if (promises_h.length === 0) {
        setTimeout(() => {}, 10000);
    }
    return new Promise((resolve, reject) => {
        promises_h.forEach((promise) => {
            promise.then(resolve, reject);
        });
    });
}

async function some(promises_h, count) {
    if (promises_h.length === 0 || count === 0) {
        return Promise.resolve([]);
    }
    return new Promise((resolve, reject) => {
        var results = [];
        let remaining = count;
        promises_h.forEach((promise) => {
            if (promise instanceof Promise) {
                promise.then((result) => {
                    results.push(result);
                    remaining--;
                    if (remaining === 0) {
                        if (results[1] === undefined && results.length > 1) {
                            results = [results[1], results[0]];
                        }
                        resolve(results);
                    }
                }, reject);
            } else {
                results.push(promise);
                remaining--;
                if (remaining === 0) {
                    resolve(results);
                }
            }
        });
    });
}
