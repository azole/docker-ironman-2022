const http = require('http');

const SERVER_PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello container!');
});

server.listen(SERVER_PORT, '0.0.0.0', () => {
  console.log(`start to listen ${SERVER_PORT}`);
});