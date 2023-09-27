// Example 3-2. "Hello, World" Node.js 서버에서 cluster 사용하기

const http = require('http');
const cluster = require('cluster');

if (cluster.isPrimary) {
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  http.createServer((req, res) => {
    res.end('Hello, World!\n');
  }).listen(3000);
}
