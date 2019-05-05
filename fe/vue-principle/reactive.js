/**
 * Object.defineproperty
 */

/**
  * update view
  * @param {any} val
  */
function update(val) {
  console.log("view updated.")
}


class Dep {
  constructor() {
    this.subs = [] // 用于存放 Watchers
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

Dep.target = null;

class Watcher {
  constructor() {
    Dep.target = this
  }

  update() {
    console.log("view updated.")
  }
}

function defineReactive(obj, key, val) {
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      dep.addSub(Dep.target)
      return val
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return
      dep.notify()
    }
  })
}

/**
 * 将 value 中的每一个key进行响应式绑定
 * @param {Object} value 需要响应式的对象
 */

function observer(value) {
  if (!value || (typeof value !== "object")) {
    return
  }

  Object.keys(value).forEach(key => {
    defineReactive(value, key, value[key])
  })
}

class Vue {
  constructor(options) {
    this._data = options.data
    observer(this._data)
    new Watcher()
    console.log("render ~ ", this._data.test)
    this._data.test = 'hello'
  }
}


/**
 * test
 */

let o = new Vue({
  data: {
    test: "I'm a test"
  }
})
