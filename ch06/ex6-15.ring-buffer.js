// Example 6-15. ch6-ring-buffer/ring-buffer.js (파트 3)

  read(bytes) {
    if (bytes > this.length) {
      bytes = this.length;
    }
    if (bytes === 0) {
      return new Uint8Array(0);
    }
    let readData;
    if (
      this.head > this.tail || this.buffer.length - this.tail >= bytes
    ) {
      readData = this.buffer.slice(this.tail, bytes)
      this.tail += bytes;
    } else {
      readData = new Uint8Array(bytes);
      const endBytesToRead = this.buffer.length - this.tail;
      readData.set(this.buffer.subarray(this.tail, this.buffer.length));
      readData.set(this.buffer.subarray(0, bytes - endBytesToRead), endBytesToRead);
      this.tail = bytes - endBytesToRead;
    }
    this.length -= bytes;
    return readData;
  }
}
