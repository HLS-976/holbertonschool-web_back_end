const http = require('http');

const app = http.createServer((request, response) => {
  if (request.url) {
    response.setHeader('Content-Type', 'text/plain');
    response.write('Hello Holberton School!');
    response.end();
  }
});

app.listen(1245, 'localhost', () => {
  console.log('Adresse: http://localhost:1245/');
});

module.export = app;
