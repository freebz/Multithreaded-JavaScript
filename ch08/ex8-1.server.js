// Example 8-1. ch8-template-render/server.js (파트 1)

#!/usr/bin/env node
// npm install fastify@3 mustache@4

const Fastify = require('fastify');
const RpcWorkerPool = require('./rpc-worker.js');
const worker = new RpcWorkerPool('./worker.js', 4, 'leastbusy');
const template = require('./template.js');
const server = Fastify();
