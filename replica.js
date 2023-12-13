function replica(elem_to, ...elem_from) {
    elem_from.forEach(source => {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                if (
                    Object.prototype.hasOwnProperty.call(elem_to, key) &&
                    Object.prototype.toString.call(elem_to[key]).slice(8, -1) !== 'Object'
                ) {
                    elem_to[key] = {};
                }

                if (Object.prototype.toString.call(source[key]).slice(8, -1) === 'Object') {
                    elem_to[key] = elem_to[key] || {};
                    replica(elem_to[key], source[key]);
                    // test 01
                } else if (Array.isArray(source[key])) {
                    elem_to[key] = source[key].map(item =>
                        Object.prototype.toString.call(item).slice(8, -1) === 'Object'
                            ? replica({}, item)
                            : item
                    );
                } else {
                    elem_to[key] = source[key];
                }
            }
        }
    });

    return elem_to;
}
