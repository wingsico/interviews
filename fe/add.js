function add(...args) {
  function sum(..._args) {
    return add([...args, ..._args])
  }

  sum.toString = () => {
    return args.reduce((a, b) => a + b);
  }

  return sum;
}

console.log(add(1, 2, 3) + 1);

/**
 * 利用闭包+toString的执行机制
 * 改写函数的toString方法，当使用函数时输出和
 * 利用闭包保持对之前传入的参数的引用
 */
