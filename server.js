const { createServer } = require("node:http");   // đây là thư viện mà ko phải cài đặt . có thể sử dụng đc vì mặc định ta cài nodejs rồi.

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World i m the superman sieu dang cap tren the gioi nay \n vi anh yeu duoi muon doi anh van yeu duoi \n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
