// Example 5-13. ch5-game-of-life/thread-gol.js (파트 2)

if (isMainThread) {
  const gridCanvas = document.getElementById('gridcanvas');
  gridCanvas.height = SIZE;
  gridCanvas.width = SIZE;
  const ctx = gridCanvas.getContext('2d');
  const iterationCounter = document.getElementById('iteration');

  const sharedMemory = new SharedArrayBuffer(
    syncOffset + // data + imageData
    THREADS * 4 // synchronizationi
  );
  const imageData = new ImageData(SIZE, SIZE);
  const cells = new Uint8Array(sharedMemory, 0, imageOffset);
  const sharedImageBuf = new Uint32Array(sharedMemory, imageOffset);
  const sharedImageBuf8 =
    new Uint8ClampedArray(sharedMemory, imageOffset, 4 * SIZE * SIZE);

  for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
      // 50% chance of cell being alive
      const cell = Math.random() < 0.5 ? 0 : 1;
      cells[SIZE * x + y] = cell;
      sharedImageBuf[SIZE * x + y] = cell ? BLACK : WHITE;
    }
  }

  imageData.data.set(sharedImageBuf8);
  ctx.putImageData(imageData, 0, 0);
