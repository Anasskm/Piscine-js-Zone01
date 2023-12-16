function debounce(f, t) {
  let time_out;
  return function() {
    clearTimeout(time_out);
    time_out = setTimeout(() => f.apply(this, arguments), t || 100);
  };
}

function opDebounce(f, w, i) {
  let time_out;
  return function() {
    const c = this, args = arguments, n = i && !time_out;
    clearTimeout(time_out);
    time_out = setTimeout(() => {time_out = null; if (!i) f.apply(c, args);}, w);
    if (n) f.apply(c, args);
  };
}
