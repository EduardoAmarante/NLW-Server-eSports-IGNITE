"use strict";
const express = require('express');
const app = express();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'teste' }
    ]);
});
app.listen(3333);
