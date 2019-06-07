var a = [1, 2, 3, [4, 5, [6, 7]]];

function flat(arr) {
  return arr.reduce((acc, cur) => Array.isArray(cur) ? acc.concat(flat(cur)) : acc.concat(cur), []);
}

console.log(flat(a));
