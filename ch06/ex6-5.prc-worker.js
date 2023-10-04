// Example 6-5. ch6-thread-pool/rpc-worker.js (파트 3)

  exec(method, ...args) {
    const id = ++this.next_command_id;
    let resolve, reject;
    const promise = new Promise((res, rej) => { resolve = res; reject = rej; });
    const worker = this.getWorker();
    worker.in_flight_commands.set(id, { resolve, reject });
    worker.worker.postMessage({ method, params: args, id });
    return promise;
  }
