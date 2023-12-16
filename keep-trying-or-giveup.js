
function retry(c = 3, call_back = async () => {}) {
    return async function (...args) {
        try {
            const res = await call_back(...args);
            return res;
        } catch (e) {
            if (c > 0) {
                return retry(c - 1, call_back)(...args);
            } else {
                throw e;
            }
        }
    };
}

// t_out 
function timeout(delay = 0, call_back = async () => {}) {
    return async function (...args) {
        const timeout = new Promise((resolve) =>
            setTimeout(resolve, delay, Error('timeout'))
        );
        const functionCall = new Promise((resolve) =>
            resolve(call_back(...args))
        );
        const res = await Promise.race([timeout, functionCall]).then(
            (res) => res
        );
        if (res instanceof Error) {
            throw res;
        }
        return res;
    };
}
