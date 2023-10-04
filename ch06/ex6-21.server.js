// Example 6-21. ch6-actors/server.js (파트 4)

function randomActor() {
  const pool = Array.from(actors);
  return pool[Math.floor(Math.random() * pool.length)];
}
