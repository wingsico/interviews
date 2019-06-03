Array.prototype.findDuplicate = function (n) {
  let newArr = [...this];

  let map = new Map();
  let ret = new Set();

  for (let i = 0; i < this.length; i++) {
    let k = newArr[i];
    let v = map.get(k);
    if (typeof v !== 'undefined') {
      v++;
    } else {
      v = 1;
    }
    map.set(k, v);
    if (v >= n) {
      ret.add(k)
    }
  }
  return [...ret];
}

console.log([1, 2, 3, 4, 1, 2, 2, 2].findDuplicate(0))
