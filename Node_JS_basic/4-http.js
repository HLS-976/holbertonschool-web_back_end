const http = require('http');

const app = http.createServer((request, response) => {
  response.writeHead(200, {'content-type': 'utf-8'})
  response.end('Hello Holberton School!');
});

app.listen(1245, 'localhost', () => {
  console.log('Adresse: http://localhost:1245');
});

module.export = app;
