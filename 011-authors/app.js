// Core requirements
const express = require('express');
const fs = require('fs');
// Variables
const port = 8080;
// Build app
const app = express();

const jsonData = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

app.get('/api/v1/authors', (req, res) => {
  res.status(200).json({
    status: 'access',
    results: jsonData.length,
    data: {
      jsonData,
    },
  });
});

app.listen(port, () => {});
