const queryServers = async (srv_name, q) =>
  await Promise.race([getJSON(`/${srv_name}?q=${q}`), getJSON(`/${srv_name}_backup?q=${q}`)]);

const gougleSearch = async (q) => {
  const srvs = ['web', 'image', 'video'];
  const timeoutPromise = new Promise((_, reject) => setTimeout(reject, 80, new Error('timeout')));
  const fastestServers = srvs
    .map((srv_name) => queryServers(srv_name, q)) // (my_collector)
    .map(async (promise) => await Promise.race([promise, timeoutPromise]));

  const res = {};
  for (let i = 0; i < srvs.length; i++) {
    res[srvs[i]] = await fastestServers[i];
  }
  return res;
};
