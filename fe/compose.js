function compose(...fns) {
  return (arg) => fns.reduce((composed, f) => f(composed), arg);
}


function mul2(arr = []) {
  return arr.map(i => i * 2);
}

function sum(arr = []) {
  return arr.reduce((a, b) => a + b, 0);
}

const get2Sum = compose(
  mul2,
  sum
)

console.log(get2Sum([1, 2, 3, 4]))
