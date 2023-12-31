// Example 6-16. ch6-ring-buffer/ring-buffer.js (파트 4)

class SharedRingBuffer {
  constructor(shared/*: number | SharedArrayBuffer*/) {
    this.shared = typeof shared === 'number' ?
      new SharedArrayBuffer(shared + 16) : shared;
    this.ringBuffer = new RingBuffer(
      new Uint32Array(this.shared, 4, 3),
      new Uint8Array(this.shared, 16)
    );
    this.lock = new Mutex(new Int32Array(this.shared, 0, 1));
  }

  write(data) {
    return this.lock.exec(() => this.ringBuffer.write(data));
  }

  read(bytes) {
    return this.lock.exec(() => this.ringBuffer.read(bytes));
  }
}
