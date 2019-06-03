let num = 3231231286485.88

let [intg, flt] = parseFloat(num).toFixed(2).split('.')
let res = intg.split('').reverse().map((v, i, a) => {
  if ((i + 1) % 3 === 0 && i < a.length - 1) {
    return `,${v}`
  } else {
    return v;
  }
}).reverse().join('') + "." + flt

console.log(res)

console.log((num).toLocaleString('ar-EG'))

let str = parseFloat(num).toFixed(2)
str = str.toString().replace(/(\d)(?=(\d{3})*\.)/g, function ($0, $1) {
  return $1 + ',';
})

console.log(str)
