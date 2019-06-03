// // // (async () => {
// // //   var queue = [];

// // //   function generatePromise(i) {
// // //     return new Promise((resolve) => {
// // //       setTimeout(() => {
// // //         resolve(i)
// // //       }, 5000)
// // //     })
// // //   }

// // //   queue = new Array(10).fill(1).map((v, i) => () => generatePromise(i))


// // //   while (queue.length > 0) {
// // //     let p = queue.pop();
// // //     let i = await p();
// // //     console.log(`element ${i} complete!`);
// // //   }

// // // })()
// // const s = new Date();
// // setTimeout(function () {
// //   // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
// //   console.log("Ran after " + (new Date() - s) + " ms");
// // }, 0);

// // while (true) {
// //   if (new Date() - s >= 1000) {
// //     console.log("Good, looped for 300 ms");
// //     break;
// //   }
// // }

// console.log(1)

// setTimeout(() => {
//   console.log(2)
//   new Promise(resolve => {
//     console.log(4)
//     resolve()
//   }).then(() => {
//     console.log(5)
//   })
//   process.nextTick(() => {
//     console.log(3)
//   })
// })

// new Promise(resolve => {
//   console.log(7)
//   resolve()
// }).then(() => {
//   console.log(8)
// })

// process.nextTick(() => {
//   console.log(6)
// })

// setTimeout(() => {
//   console.log(9)
//   process.nextTick(() => {
//     console.log(10)
//   })
//   new Promise(resolve => {
//     console.log(11)
//     resolve()
//   }).then(() => {
//     console.log(12)
//   })
// })
// setTimeout(() => {
//   console.log(2)
// }, 2)

// setTimeout(() => {
//   console.log(1)
// }, 1)

// setTimeout(() => {
//   console.log(0)
// }, 0)

// setTimeout(() => {
//   console.log(0)
// })

// setImmediate(() => {
//   console.log(1)
// })
// process.nextTick(function () {
//   console.log("nextTick延迟执行A");
// });
// process.nextTick(function () {
//   console.log("nextTick延迟执行B");
//   setImmediate(function () {
//     console.log("setImmediate延迟执行C");
//   });
//   process.nextTick(function () {
//     console.log("nextTick延迟执行D");
//   });
// });


// //加入两个setImmediate()回调函数
// setImmediate(function () {
//   console.log("setImmediate延迟执行E");
//   process.nextTick(function () {
//     console.log("强势插入F");
//   });
//   setImmediate(function () {
//     console.log("setImmediate延迟执行G");
//   });
// });
// setImmediate(function () {
//   console.log("setImmediate延迟执行H");
//   process.nextTick(function () {
//     console.log("强势插入I");
//   });
//   process.nextTick(function () {
//     console.log("强势插入J");
//   });
//   setImmediate(function () {
//     console.log("setImmediate延迟执行K");
//   });
// });
// console.log("正常执行L");
console.log('1');

setTimeout(function () {
  console.log('2');
  process.nextTick(function () {
    console.log('3');
  })
  new Promise(function (resolve) {
    console.log('4');
    resolve();
  }).then(function () {
    console.log('5')
  })
})
process.nextTick(function () {
  console.log('6');
})
new Promise(function (resolve) {
  console.log('7');
  resolve();
}).then(function () {
  console.log('8')
})

setTimeout(function () {
  console.log('9');
  process.nextTick(function () {
    console.log('10');
  })
  new Promise(function (resolve) {
    console.log('11');
    resolve();
  }).then(function () {
    console.log('12')
  })
})
