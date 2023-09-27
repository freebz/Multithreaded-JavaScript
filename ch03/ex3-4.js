// Example 3-4. 워커 스레드에 workerData 전송하기

const {
  Worker,
  isMainThread,
  workerData
} = require('worker_threads');
const assert = require('assert');

if (isMainThread) {
  const worker = new Worker(__filename, { workerData: { num: 42 } });
} else {
  assert.strictEqual(workerData.num, 42);
}
