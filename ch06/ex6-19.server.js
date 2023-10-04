// Example 6-19. ch6-actors/server.js (파트 2)

net.createServer((client) => {
  const handler = data => client.write(JSON.stringify(data) + '\0');
  actors.add(handler);
  console.log('actor pool connected', actors.size);
  client.on('end', () => {
    actors.delete(handler);
    console.log('actor pool disconnected', actors.size);
  }).on('data', (raw_data) => {
    const chunks = String(raw_data).split('\0');
    chunks.pop();
    for (let chunk of chunks) {
      const data = JSON.parse(chunk);
      const res = messages.get(data.id);
      res.end(JSON.stringify(data) + '\0');
      messages.delete(data.id);
    }
  });
}).listen(actor_port, actor_hostname, () => {
  console.log(`actor: tcp://${actor_hostname}:${actor_port}`);
});
