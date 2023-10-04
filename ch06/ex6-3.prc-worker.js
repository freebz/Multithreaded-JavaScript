// Example 6-3. ch6-thread-pool/rpc-worker.js (파트 1)

const { Worker } = require('worker_threads');
const CORES = require('os').cpus().length;
const STRATEGIES = new Set([ 'roundrobin', 'random', 'leastbusy' ]);

module.exports = class RpcWorkerPool {
  constructor(path, size = 0, strategy = 'roundrobin') {
    if (size === 0)    this.size = CORES;
    else if (size < 0) this.size = Math.max(CORES + size, 1);
    else               this.size = size;

    if (!STRATEGIES.has(strategy)) throw new TypeError('invalid strategy');
    this.strategy = strategy;
    this.rr_index = -1;

    this.next_command_id = 0;
    this.workers = [];
    for (let i = 0; i < this.size; i++) {
      const worker = new Worker(path);
      this.workers.push({ worker, in_flight_commands: new Map() });
      worker.on('message', (msg) => {
	this.onMessageHandler(msg, i);
      });
    }
  }
