// Example 3-10. ch3-happycoin/happycoin-threads.js

const {
  Worker,
  isMainThread,
  parentPort
} = require('worker_threads');
