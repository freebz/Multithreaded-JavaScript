// Example 6-9. ch6-mutex/mutex.js (파트 2)

  acquire() {
    if (compareExchange(this.shared, this.index, UNLOCKED, LOCKED) === UNLOCKED) {
      return;
    }
    wait(this.shared, this.index, LOCKED);
    this.acquire();
  }
