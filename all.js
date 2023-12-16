async function all(all_objs = {}) {
    const res = {};
    for (const key in all_objs) res[key] = await all_objs[key];
    return res;
}
