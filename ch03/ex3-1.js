// Example 3-1. "Hello, World" Node.js 서버

const http = require('http');

http.createServer((req, res) => {
  res.end('Hello, World!\n');
}).listen(3000);
