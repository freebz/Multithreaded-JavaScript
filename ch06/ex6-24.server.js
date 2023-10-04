// Example 6-24. ch6-actors/server.js (파트 5, 추가)

const RpcWorkerPool = require('./rpc-worker.js');
const worker = new RpcWorkerPool('./worker.js', 4, 'leastbusy');
actors.add(async (data) => {
  const value = await worker.exec(data.method, ...data.args);
  messages.get(data.id).end(JSON.stringify({
    id: data.id,
    value,
    pid: 'server'
  }) + '\0');
  messages.delete(data.id);
});
