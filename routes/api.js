const express = require('express');
const dataRouter = require('./dataRouter.js')

const app = express();

app.use('/data', dataRouter)

module.exports = app;