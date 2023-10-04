// Example 6-13. ch6-ring-buffer/ring-buffer.js (파트 1)

class RingBuffer {
  constructor(meta/*: Uint32Array[3]*/, buffer /*: Uint8Array */) {
    this.meta = meta;
    this.buffer = buffer;
  }

  get head() {
    return this.meta[0];
  }

  set head(n) {
    this.meta[0] = n;
  }

  get tail() {
    return this.meta[1];
  }

  set tail(n) {
    this.meta[1] = n;
  }

  get length() {
    return this.meta[2];
  }

  set length(n) {
    this.meta[2] = n;
  }
