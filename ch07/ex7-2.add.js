// Example 7-2. ch7-wasm-add/add.js

const fs = require('fs/promises'); // Node.js v14이상 필요.

(async () => {
  const wasm = await fs.readFile('./add.wasm');
  const { instance: { exports: { add } } } = await WebAssembly.instantiate(wasm);
  console.log(add(2, 3));
})();
