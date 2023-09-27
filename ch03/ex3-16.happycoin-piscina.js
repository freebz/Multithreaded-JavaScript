// Example 3-16. ch3-happycoin/happycoin-piscina.js

const THREAD_COUNT = 4;

if (!Piscina.isWorkerThread) {
  const piscina = new Piscina({
    filename: __filename,
    minThreads: THREAD_COUNT,
    maxThreads: THREAD_COUNT
  })
  let done = 0;
  let count = 0;
  for (let i = 0; i < THREAD_COUNT; i++) {
    (async () => {
      const { total, happycoins } = await piscina.run()
      process.stdout.write(happycoins);
      count += total;
      if (++done === THREAD_COUNT) {
	console.log('\ncount', count);
      }
    })();
  }
}
