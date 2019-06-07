class EventBus {
  constructor(maxListeners = 10) {
    this._events = new Map();
    this._maxListeners = maxListeners;
  }

  on(type, fn) {
    const fns = this._events.get(type);
    if (fns) {
      if (fns.length <= this.maxListeners) return;
      this._events.set(type, [...fns, fn]);
    } else {
      this._events.set(type, [fn]);
    }
  }

  emit(type, ...args) {
    const fns = this._events.get(type);
    if (fns) {
      fns.forEach((fn) => fn.apply(this, args));
    }
  }

  remove(type, fn) {
    const fns = this._events.get(type);
    if (fns && fns.find((f) => f === fn)) {
      fns.splice(fns.findIndex((f) => f === fn), 1);
    }
  }
}

var e = new EventBus();

function a(data) {
  console.log('1' + data);
}


e.on('ahah', a)

e.on('ahah', (data) => {
  console.log('2' + data)
})

e.emit('ahah', 'fuck')

e.remove('ahah', a);

e.emit('ahah', 'fuck!!!')
