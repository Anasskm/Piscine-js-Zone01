async function getJSON(p = '', params = {}) {
    const url = `${p}?${Object.entries(params)
        .map(([key, value]) => `${key.replace(' ', '+')}=${value.toString().replace(' ', '+')}`)
        .join('&')}`;

    const { ok, json, statusText } = await fetch(url);
    if (ok) {
        const res = await json();
        if (res.error) throw new Error(res.error);
        return res.data;
    } else {
        throw new Error(statusText);
    }
}
