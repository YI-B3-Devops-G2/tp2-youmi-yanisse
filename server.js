'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});
app.get('/status', (req, res) => {
    //
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
