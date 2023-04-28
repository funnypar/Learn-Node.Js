// Core requirements
const express = require('express');
const fs = require('fs');
// Development modules

// Variables
const port = 8080;
// Build app
const app = express();
app.use(express.json());

const authors = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

const getAllAuthors = (req, res) => {
  res.status(200).json({
    status: 'access',
    results: authors.length,
    data: {
      authors,
    },
  });
};
const getOneAuthor = (req, res) => {
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
};
const postAuthor = (req, res) => {
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
};
const updateAuthor = (req, res) => {
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
};
const deleteAuthor = (req, res) => {
  if (req.body.id > authors.length) {
    res.status(404).json({
      status: 'Not Found',
      massage: 'This id is not valid !!!',
    });
  }
  res.status(204).json({
    status: 'deleted',
    data: null,
  });
};

app.route('/api/v1/authors').get(getAllAuthors).post(postAuthor);
app
  .route('/api/v1/authors/:id')
  .get(getOneAuthor)
  .patch(updateAuthor)
  .delete(deleteAuthor);

app.listen(port, () => {});
