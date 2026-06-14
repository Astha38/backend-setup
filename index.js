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



// const http = require('http');

// // Change { writeHead, end } to just res
// const server = http.createServer((req, res) => {
//     console.log('--- url---');
//     console.log(req.url);

//     console.log('---Method---');
//     console.log(req.method);

//     console.log('---Headers---');
//     console.log(req.headers);

//     // Call the methods directly from the res object
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Check your terminal to see the logs!');
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
