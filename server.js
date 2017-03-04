var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express()
app.use(morgan('combined'))