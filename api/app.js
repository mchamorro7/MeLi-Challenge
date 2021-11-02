var compression = require('compression');
var express = require('express');
var cors = require('cors');
var app = express();
app.use(compression());
app.use(cors());

const routes = require('./routes');
app.use('/api', routes);

module.exports = app;