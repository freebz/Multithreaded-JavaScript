// Example 5-16. ch5-game-of-life/thread-gol.js (파트 5)

  function runWorker({ range, i }) {
    const grid = new Grid(SIZE, sharedMemory);
    while (true) {
      Atomics.wait(sync, i, 0);
      grid.iterate(...range);
      Atomics.store(sync, i, 0);
      Atomics.notify(sync, i);
    }
  }
