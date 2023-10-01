// Example 5-7. ch5-game-of-life/gol.js (파트 2)

  static NEIGHBORS = [
    [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]
  ];

  iterate(minX, minY, maxX, maxY) {
    const size = this.size;

    for (let x = minX; x < maxX; x++) {
      for (let y = minY; y < maxY; y++) {
	const cell = this.cells[size * x + y];
	let alive = 0;
	for (const [i, j] of Grid.NEIGHBORS) {
	  alive += this.getCell(x + i, y + j);
	}
	const newCell = alive === 3 || (cell && alive === 2) ? 1 : 0;
	this.nextCells[size * x + y] = newCell;
	this.paint(newCell, x, y);
      }
    }

    const cells = this.nextCells;
    this.nextCells = this.cells;
    this.cells = cells;
  }
}
