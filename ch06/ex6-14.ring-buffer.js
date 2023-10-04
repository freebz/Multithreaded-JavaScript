// Example 6-14. ch6-ring-buffer/ring-buffer.js (파트 2)

  write(data /*: Uint8Array */) {
    let bytesWritten = data.length;
    if (bytesWritten > this.buffer.length - this.length) {
      bytesWritten = this.buffer.length - this.length;
      data = data.subarray(0, bytesWritten);
    }
    if (bytesWritten === 0) {
      return bytesWritten;
    }
    if (
      (this.head >= this.tail && this.buffer.length - this.head >= bytesWritten) ||
	(this.head < this.tail && bytesWritten <= this.tail - this.head)
    ) {
      this.buffer.set(data, this.head);
      this.head += bytesWritten;
    } else {
      const endSpaceAvailable = this.buffer.length - this.head;
      const endChunk = data.subarray(0, endSpaceAvailable);
      const beginChunk = data.subarray(endSpaceAvailable);
      this.buffer.set(endChunk, this.head)
      this.buffer.set(beginChunk, 0);
      this.head = beginChunk.length;
    }
    this.length = bytesWritten;
    return bytesWritten;
  }
