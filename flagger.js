function flags(obj) {
    const res = { alias: { h: 'help' }, description: '' };
    const keys = Object.keys(obj).filter(key => key !== 'help');
    keys.forEach(key => res.alias[key[0]] = key);
    res.description = (obj.help || keys).map(key => 
        `-${key[0]}, --${key}: ${obj[key] || ''}`
    ).join('\n') || '';
    return res;
}
