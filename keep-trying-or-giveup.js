function retry(c, call_back) {
    return async function (...args) {
        let err = 1;
        let res;

        while (err <= c) {
            try {
                res = await call_back(...args);
                console.log("arg:", args, "Err# " + err, res);
                return res;
            } catch (e) {
                err++;
                if (err > c) throw e;
            }
        }

        return res;
    };
}

let o = 0;
function timeout(d, call_back) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            o++;
            const delayedCallback = () => {
                reject(Error('timeout'));
            };

            setTimeout(delayedCallback, o === 3 ? d : 0);

            setTimeout(async () => {
                const res = await call_back(...args);
                resolve(res);
            }, d);
        });
    };
}