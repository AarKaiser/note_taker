const express = require('express');
const nRouter = require('./notes');
const app = express();

app.use('/notes', nRouter);

module.exports = app;