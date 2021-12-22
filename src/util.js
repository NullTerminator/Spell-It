export function by(key_func, val) {
  key_func = ensure_attr_func(key_func);

  return (i) => {
    return key_func(i) === val;
  };
}

export function ensure_attr_func(func) {
  if (typeof func !== 'function') {
    return (i) => { return i[func]; };
  }
  return func;
}

export function get_random_index(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
