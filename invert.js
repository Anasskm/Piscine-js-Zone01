function invert(obj) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}
