// Example 3-14. (에러 없이) piscina를 사용하여 제곱근 10,000,000번 계산하기

const Piscina = require('piscina');
const assert = require('assert');
const { once } = require('events');

if (!Piscina.isWorkerThread) {
  const piscina = new Piscina({
    filename: __filename,
    maxQueue: 'auto',
  });
  (async () => {
    for (let i = 0; i < 10_000_000; i++) {
      if (piscina.queueSize === piscina.options.maxQueue) {
	await once(piscina, 'drain');
      }
      piscina.run(i).then(squareRootOfI => {
	assert.ok(typeof squareRootOfI === 'number');
      });
    }
  })();
}
