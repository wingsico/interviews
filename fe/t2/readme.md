## 问题

函数中的arguments是数组吗？类数组转数组的方法？

## 回答

arguments 不是数组，它是类数组，除了有 `length` 属性和索引元素之外没有任何 `Array` 属性.

1. [...arguments]
2. Array.from(argments);
3. Array.prototype.slice.call(arguments);
4. 第三点的便捷写法:
  ```js
  let unboundedSlice = Array.prototype.slice
  let slice = Function.prototype.call.bind(unboundedSlice)
  slice(arguments)
  ```
