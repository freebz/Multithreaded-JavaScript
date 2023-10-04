// Example 6-11. ch6-mutex/mutex.js (파트 4)

  exec(fn) {
    this.acquire();
    try {
      return fn();
    } finally {
      this.release();
    }
  }
}

module.exports = Mutex;
