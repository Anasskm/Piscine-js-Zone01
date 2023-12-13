function fusion(a, b) {
    const result = {};
    const use = Object.keys(a).length > Object.keys(b).length ? a : b;

    Object.keys(use).forEach(key => {
        const isString = typeof a[key] === 'string' && typeof b[key] === 'string';
        const isNumber = typeof a[key] === 'number' && typeof b[key] === 'number';
        const isArray = Array.isArray(a[key]) && Array.isArray(b[key]);
        const isObject = typeof a[key] === 'object' && typeof b[key] === 'object' && a[key] !== null && b[key] !== null;

        result[key] = isArray ? a[key].concat(b[key]) :
                      isString ? a[key] + ' ' + b[key] :
                      isNumber ? a[key] + b[key] :
                      isObject ? fusion(a[key], b[key]) :
                      b[key] !== undefined ? b[key] : a[key];
    });

    return result;
}
