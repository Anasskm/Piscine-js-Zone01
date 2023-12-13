const filterValues = (obj, cond) => Object.keys(obj).reduce((result, key) => (cond(obj[key]) && (result[key] = obj[key]), result), {});

const mapValues = (obj, cond) => Object.keys(obj).reduce((result, key) => ((result[key] = cond(obj[key])), result), {});

const reduceValues = (obj, cond, start = 0) => Object.keys(obj).reduce((val, key) => cond(val, obj[key]), start);
