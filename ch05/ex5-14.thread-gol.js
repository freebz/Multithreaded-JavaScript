// Example 5-14. ch5-game-of-life/thread-gol.js (파트 3)

  const chunkSize = SIZE / THREADS;
  for (let i = 0; i < THREADS; i++) {
    const worker = new Worker('thread-gol.js', { name: `gol-worker-${i}` });
    worker.postMessage({
      range: [0, chunkSize * i, SIZE, chunkSize * (i + 1)],
      sharedMemory,
      i
    });
  }

  const coordWorker = new Worker('thread-gol.js', { name: 'gol-coordination' });
  coordWorker.postMessage({ coord: true, sharedMemory });

  let iteration = 0;
  coordWorker.addEventListener('message', () => {
    imageData.data.set(sharedImageBuf8);
    ctx.putImageData(imageData, 0, 0);
    iterationCounter.innerHTML = ++iteration;
    window.requestAnimationFrame(() => coordWorker.postMessage({}));
  });
