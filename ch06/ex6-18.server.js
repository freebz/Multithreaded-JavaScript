// Example 6-18. ch6-actors/server.js (파트 1)

#!/usr/bin/env node

const http = require('http');
const net = require('net');

const [,, web_host, actor_host] = process.argv;
const [web_hostname, web_port] = web_host.split(':');
const [actor_hostname, actor_port] = actor_host.split(':');

let message_id = 0;
let actors = new Set(); // collection of actor handlers
let messages = new Map(); // message ID -> HTTP response
