const filterKeys = (obj, cond) => Object.keys(obj).reduce((result, key) => (cond(key) && (result[key] = obj[key]), result), {});

const mapKeys = (obj, cond) => Object.keys(obj).reduce((result, key) => ((result[cond(key)] = obj[key]), result), {});

const reduceKeys = (obj, cond, start) => start === undefined ? Object.keys(obj).reduce((prev, curr) => cond(prev, curr)) : Object.keys(obj).reduce((prev, curr) => cond(prev, curr), start);
