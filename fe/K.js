var data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findKMax(data, k) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
      if (data[j + 1] < data[j]) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
      }
    }
    console.log(data);
    if (i >= k - 1) {
      return data[data.length - k];
    }
  }
}

console.log(findKMax(data.reverse(), 4));
