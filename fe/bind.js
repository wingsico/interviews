Function.prototype.bind2 = function (obj, ...args) {
  let ret = (..._args) => {
    this.apply(obj, [...args, ..._args]);
  }
  console.log(this)
  ret.prototype = Object.create(this.prototype);
  return ret;
}


var a = {
  b: 1
}

var c = {
  b: 2
}

function test() {
  console.log(this.b)
}

test.prototype = {
  b: 3,
  d: 4
}

var g = new test();
console.log(g.d);

var newTest = test.bind2();
var a = new newTest();
