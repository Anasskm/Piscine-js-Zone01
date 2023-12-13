function pick(obj, keys) {
    const elems_0 = {};
    for (const key of Object.keys(obj).filter(k => (typeof keys === "string" ? keys.match(new RegExp(`^${k}$`)) : keys.includes(k))))
        elems_0[key] = obj[key];
    return elems_0;
}

function omit(obj, keys) {
    const elems_0 = {};
    for (const key of Object.keys(obj).filter(k => (typeof keys === "string" ? !keys.match(new RegExp(`^${k}$`)) : !keys.includes(k))))
        elems_0[key] = obj[key];
    return elems_0;
}
