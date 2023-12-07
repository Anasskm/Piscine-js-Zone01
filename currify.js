const currify = fn => (...args) =>
  args.length >= fn.length ? fn(...args) : currify(fn.bind(null, ...args));
