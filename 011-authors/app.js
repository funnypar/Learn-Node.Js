// Core requirements
const express = require('express');
const fs = require('fs');
// Variables
const port = 8080;
// Build app
const app = express();
app.use(express.json());

const authors = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);
// Read Data
app.get('/api/v1/authors', (req, res) => {
  res.status(200).json({
    status: 'access',
    results: authors.length,
    data: {
      authors,
    },
  });
});
// Update Data
app.post('/api/v1/authors', (req, res) => {
  const newId = authors[authors.length - 1].id + 1;
  const newAuthor = Object.assign({ id: newId }, req.body);
  authors.push(newAuthor);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(authors),
    (err) => {
      res.status(201).json({
        status: 'update',
        data: {
          authors,
        },
      });
    }
  );
});

app.listen(port, () => {});
