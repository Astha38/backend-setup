const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.writeHead(200,{'Content-type': 'text/plain'});
    res.end('Welcome Home');
  } else if (req.url === '/about'){
    res.writeHead(200,{'content-type': 'text/plain'});
    res.end('this is the about page');
  } else {
    res.writeHead(404,{'content-type': 'text/plain'});
    res.end('404 Not Found')
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});