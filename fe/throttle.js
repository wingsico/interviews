const throttle = (func, wait) => {
  let lock = false;
  let f = true;
  return function (...args) {
    if (f) {
      f = false;
      func.apply(this, args);
    }
    if (!lock) {
      lock = true;
      setTimeout(() => {
        func.apply(this, args);
        lock = false;
      }, wait)
    }
  }
}
