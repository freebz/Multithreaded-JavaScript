// Example 5-12. ch5-game-of-life/thread-gol.js (파트 1)

const BLACK = 0xFF000000;
const WHITE = 0xFFFFFFFF;
const SIZE = 1000;
const THREADS = 5; // SIZE를 나룰 수 있는 약수

const imageOffset = 2 * SIZE * SIZE
const syncOffset = imageOffset + 4 * SIZE * SIZE;

const isMainThread = !!self.window;
