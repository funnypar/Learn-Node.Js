// Core requirements
const express = require('express');
const authorsRouter = require('./routes/authorsRouter');
const bookRouter = require('./routes/bookRouter');
const morgan = require('morgan');
// Build app
const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/authors', authorsRouter);
app.use('/api/v1/books', bookRouter);

module.exports = app;
