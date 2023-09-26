// Example 2-2. ch2-web-workers/main.js

console.log('hello from main.js');

const worker = new Worker('worker.js');

worker.onmessage = (msg) => {
  console.log('message received from worker', msg.data);
};

worker.postMessage('message sent to worker');

console.log('hello from end of main.js');
