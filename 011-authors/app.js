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
// Read Datas
app.get('/api/v1/authors', (req, res) => {
  res.status(200).json({
    status: 'access',
    results: authors.length,
    data: {
      authors,
    },
  });
});
// Read Just one Data
app.get('/api/v1/authors/:id', (req, res) => {
  const author = authors.find((el) => el.id === +req.params.id);
  if (!author)
    res.status(404).json({
      status: 'Not Found',
      massage: 'Your Id has not found !!!',
    });
  res.status(200).json({
    status: 'access',
    data: {
      author,
    },
  });
});
// Post Data
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
// Update data
app.patch('/api/vi/api:id', (req, res) => {
  if (req.body.id > authors.length) {
    res.status(404).json({
      status: 'Not Found',
      massage: 'This id is not valid !!!',
    });
  }
  res.status(200).json({
    status: 'updated',
    data: {
      author,
    },
  });
});

app.listen(port, () => {});
