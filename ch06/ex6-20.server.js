// Example 6-20. ch6-actors/server.js (파트 3)

http.createServer(async (req, res) => {
  message_id++;
  if (actors.size === 0) return res.end('ERROR: EMPTY ACTOR POOL');
  const actor = randomActor();
  messages.set(message_id, res);
  actor({
    id: message_id,
    method: 'square_sum',
    args: [Number(req.url.substr(1))]
  });
}).listen(web_port, web_hostname, () => {
  console.log(`web:  http://${web_hostname}:${web_port}`);
});
