const express = require('express');
const app = express();

// ✅ Middleware works perfectly here
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome Home');
});

app.get('/about', (req, res) => {
  res.send('this is the about page');
});

app.get('/home', (req, res) => {
  res.send('Welcome home!');
});

// 404 Catch-all
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
