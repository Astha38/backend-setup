const express = require('express');
const app = express();

// Middleware 1 - Logger
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});

// Middleware 2 - Method Checker
app.use((req, res, next) => {
  if (req.method !== 'GET') {
    console.log('non get request');
  }
  next();
});

//Error handling
app.use((err,req,res,next)=>{
  console.error(err.stack);

  res.status(err.status || 500).json({
    success:false,
    message:err.message||'INTERNAL SERVER ERROR'
  });
});

// Routes
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