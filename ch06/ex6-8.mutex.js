// Example 6-8. ch6-mutex/mutex.js (파트 1)

const UNLOCKED = 0;
const LOCKED = 1;

const {
  compareExchange, wait, notify
} = Atomics;

class Mutex {
  constructor(shared, index) {
    this.shared = shared;
    this.index = index;
  }
