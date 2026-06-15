const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req, res) => {
    res.send('Hello, Express is up and running!');
});

app.listen(PORT, () =>{
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});