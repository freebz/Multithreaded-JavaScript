// Example 6-22. ch6-actors/actor.js (파트 1)

#!/usr/bin/env node

const net = require('net');
const RpcWorkerPool = require('./rpc-worker.js');

const [,, host] = process.argv;
const [hostname, port] = host.split(':');
const worker = new RpcWorkerPool('./worker.js', 4, 'leastbusy');
