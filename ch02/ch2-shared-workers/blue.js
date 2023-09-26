// Example 2-6. ch2-shared-workers/blue.js

console.log('blue.js');

const worker = new SharedWorker('shared-worker.js');

worker.port.onmessage = (event) => {
  console.log('EVENT', event.data);
};
