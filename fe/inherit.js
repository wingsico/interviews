function inherit(Sup, Sub) {
  Sub.prototype = Object.create(Sup.prototype);
  // Sub.prototype.constructor = Sub;
}

function Super(props) {
  this.props = props;
}

function Sub(props) {
  Super.call(this, props);
}

inherit(Super, Sub);


if (!Object.create) {
  Object.create = function (obj) {
    function F() { }
    F.prototype = obj;
    return new F;
  }
}
/**
 * 寄生组合继承
 */
