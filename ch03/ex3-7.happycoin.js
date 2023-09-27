// Example 3-7. ch3-happycoin/happycoin.js

const crypto = require('crypto');

const big64arr = new BigUint64Array(1)
function random64() {
  crypto.randomFillSync(big64arr);
  return big64arr[0];
}
