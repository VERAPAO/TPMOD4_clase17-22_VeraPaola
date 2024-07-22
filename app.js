const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});

app.get('/ingresa', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.listen(port, () => console.log (`https://localhost:${port}`));