var data = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}, { a: 1 }, { a: '1' }]

var unique = function (arr = []) {
  let map = new Map();
  let filter = [];
  for (let i = 0; i < arr.length; i++) {
    let cur_str = JSON.stringify(arr[i]);
    if (!map.has(cur_str)) {
      map.set(cur_str, 1);
      filter.push(arr[i])
    }
  }
  return filter;
}

console.log(unique(data))
