// Example 5-15. ch5-game-of-life/thread-gol.js (파트 4)

} else {
  let sharedMemory;
  let sync;
  let sharedImageBuf;
  let cells;
  let nextCells;

  self.addEventListener('message', initListener);

  function initListener(msg) {
    const opts = msg.data;
    sharedMemory = opts.sharedMemory;
    sync = new Int32Array(sharedMemory, syncOffset);
    self.removeEventListener('message', initListener);
    if (opts.coord) {
      self.addEventListener('message', runCoord);
      cells = new Uint8Array(sharedMemory);
      nextCells = new Uint8Array(sharedMemory, SIZE * SIZE);
      sharedImageBuf = new Uint32Array(sharedMemory, imageOffset);
      runCoord();
    } else {
      runWorker(opts);
    }
  }
