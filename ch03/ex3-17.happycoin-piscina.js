// Example 3-17. ch3-happycoin/happycoin-piscina.js

module.exports = () => {
  let happycoins = '';
  let total = 0;
  for (let i = 0; i < 10_000_000/THREAD_COUNT; i++) {
    const randomNum = random64();
    if (isHappycoin(randomNum)) {
      happycoins += randomNum.toString() + ' ';
      total++;
    }
  }
  return { total, happycoins };
}
