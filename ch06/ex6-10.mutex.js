// Example 6-10. ch6-mutex/mutex.js (파트 3)

  release() {
    if (compareExchange(this.shared, this.index, LOCKED, UNLOCKED) !== LOCKED) {
      throw new Error('was not acquired');
    }
    notify(this.shared, this.index, 1);
  }
