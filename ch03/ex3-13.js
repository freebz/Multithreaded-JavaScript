// Example 3-13. piscina를 사용하여 제곱근 10,000,000번 계산하기

const Piscina = require('piscina');
const assert = require('assert');

if (!Piscina.isWorkerThread) {
  const piscina = new Piscina({ filename: __filename });
  for (let i = 0; i < 10_000_000; i++) {
    piscina.run(i).then(squareRootOfI => {
      assert.ok(typeof squareRootOfI === 'number');
    });
  }
}
