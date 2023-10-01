// Example 5-9. ch5-game-of-life/gol.js (파트 4)

const BLACK = 0xFF000000;
const WHITE = 0xFFFFFF;
const SIZE = 1000;

const iterationCounter = document.getElementById('iteration');
const gridCanvas = document.getElementById('gridcanvas');
gridCanvas.height = SIZE;
gridCanvas.width = SIZE;
const ctx = gridCanvas.getContext('2d');
const data = ctx.createImageData(SIZE, SIZE);
const buf = new Uint32Array(data.data.buffer);

function paint(cell, x, y) {
  buf[SIZE * x + y] = cell ? BLACK : WHITE;
}

const grid = new Grid(SIZE, new ArrayBuffer(2 * SIZE * SIZE), paint);
for (let x = 0; x < SIZE; x++) {
  for (let y = 0; y < SIZE; y++) {
    const cell = Math.random() < 0.5 ? 0 : 1;
    grid.cells[SIZE * x + y] = cell;
    paint(cell, x, y);
  }
}

ctx.putImageData(data, 0, 0);
