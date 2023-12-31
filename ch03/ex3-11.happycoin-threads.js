// Example 3-11. ch3-happycoin/happycoin-threads.js

const THREAD_COUNT = 4;

if (isMainThread) {
  let inFlight = THREAD_COUNT;
  let count = 0;
  for (let i = 0; i < THREAD_COUNT; i++) {
    const worker = new Worker(__filename);
    worker.on('message', msg => {
      if (msg === 'done') {
	if (--inFlight === 0) {
	  process.stdout.write('\ncount ' + count + '\n');
	}
      } else if (typeof msg === 'bigint') {
	process.stdout.write(msg.toString() + ' ');
	count++;
      }
    })
  }
} else {
  for (let i = 1; i < 10_000_000/THREAD_COUNT; i++) {
    const randomNum = random64();
    if (isHappycoin(randomNum)) {
      parentPort.postMessage(randomNum);
    }
  }
  parentPort.postMessage('done');
}
