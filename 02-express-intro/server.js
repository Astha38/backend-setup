const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req, res) => {
    res.send('Hello, Express is up and running!');
});

app.get('/user/:id',(req, res) => {
    const id = req.params.id;
    res.send(`User ID is ${id}`);
});

app.get('/search',(req,res) =>{
    const name = req.query.name;
    res.send(`Searching for ${name}`)
})

app.get('/home',(req, res) => {
    res.send('This is our home page!');
});

app.get('/search', (req, res) => {
    // req.query grabs everything after the '?' in the URL
    const name = req.query.name; 
    
    if (name) {
        res.send(`Search results for: ${name}`);
    } else {
        res.send('No search query provided!');
    }
});

app.listen(PORT, () =>{
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});

