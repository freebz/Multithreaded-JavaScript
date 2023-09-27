// Example 3-3. Node.js에서 새로운 워커 스레드 생성하기

const { Worker } = require('worker_threads');

const worker = new Worker('/path/to/worker-file-name.js');
