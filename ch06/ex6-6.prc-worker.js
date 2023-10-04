// Example 6-6. ch6-thread-pool/rpc-worker.js (파트 4)

  getWorker() {
    let id;
    if (this.strategy === 'random') {
      id = Math.floor(Math.random() * this.size);
    } else if (this.strategy === 'roundrobin') {
      this.rr_index++;
      if (this.rr_index >= this.size) this.rr_index = 0;
      id = this.rr_index;
    } else if (this.strategy === 'leastbusy') {
      let min = Infinity;
      for (let i = 0; i < this.size; i++) {
	let worker = this.workers[i];
	if (worker.in_flight_commands.size < min) {
	  min = worker.in_flight_commands.size;
	  id = i;
	}
      }
    }
    console.log('Selected Worker:', id);
    return this.workers[id];
  }
};
