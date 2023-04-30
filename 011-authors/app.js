// Core requirements
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
// Variables
const port = 8080;
// Build app
const app = express();
app.use(morgan('dev'));
app.use(express.json());

const authors = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

// Tour Handler
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
// User Handler
const getAllBooks = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This Part has not implemented !!!',
  });
};
const postBook = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This Part has not implemented !!!',
  });
};
const getOneBook = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This Part has not implemented !!!',
  });
};
const updateBook = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This Part has not implemented !!!',
  });
};
const deleteBook = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This Part has not implemented !!!',
  });
};
// Route
const authorsRouter = express.Router();
const booksRouter = express.Router();

authorsRouter.route('/').get(getAllAuthors).post(postAuthor);
authorsRouter
  .route('/:id')
  .get(getOneAuthor)
  .patch(updateAuthor)
  .delete(deleteAuthor);

booksRouter.route('/').get(getAllBooks).post(postBook);
booksRouter.route('/:id').get(getOneBook).patch(updateBook).delete(deleteBook);

app.use('/api/v1/authors', authorsRouter);
app.use('/api/v1/books', authorsRouter);

app.listen(port, () => {});
