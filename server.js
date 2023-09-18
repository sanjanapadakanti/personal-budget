const express = require('express');
const fileSystem = require('fs');
const app = express();
const port = 3000;
const importingJSON = fileSystem.readFileSync('data.json', 'UTF8');
const budgetData = JSON.parse(importingJSON);
app.use('/',express.static('public'));


app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budgetData);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});