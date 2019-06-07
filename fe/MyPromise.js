function MyPromise(fn = () => { }) {
  this.value = undefined;
  this.status = "pending";
  this.reason = undefined;

  const resolve = (value) => {
    if (this.status === "pending") {
      this.value = value;
      this.status = "resolved";
    }
  }

  const reject = (err) => {
    if (this.status === "pending") {
      this.reason = err;
      this.status = "reject"
    }
  }

  try {
    fn(resolve, reject);
  } catch (err) {
    reject(err)
  }
}

MyPromise.prototype.then = function (onResolve, onReject) {
  switch (this.status) {
    case "rejected":
      onReject(this.reason);
      break;
    case "resolved":
      onResolve(this.value);
      break;
    default:
  }
}
