// Example 5-17. ch5-game-of-life/thread-gol.js (파트 6)

  function runCoord() {
    for (let i = 0; i < THREADS; i++) {
      Atomics.store(sync, i, 1);
      Atomics.notify(sync, i);
    }
    for (let i = 0; i < THREADS; i++) {
      Atomics.wait(sync, i, 1);
    }
    const oldCells = cells;
    cells = nextCells;
    nextCells = oldCells;
    for (let x = 0; x < SIZE; x++) {
      for (let y = 0; y < SIZE; y++) {
	sharedImageBuf[SIZE * x + y] = cells[SIZE * x + y] ? BLACK : WHITE;
      }
    }
    self.postMessage({});
  }
}
