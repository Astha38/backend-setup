const express = require('express');
const app = express();

// ✅ Middleware works perfectly here
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

// ✅ Fixed: Properly closed this middleware block and moved next() outside the if statement
app.use((req, res, next) => {
    if (req.method !== 'GET') {
        console.log('non get request');
    }
    next(); 
}); 

app.post('/', (req, res) => {
  console.log('detail submitted');
  res.send('Form submitted!');
}); 

// 404 Catch-all
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
