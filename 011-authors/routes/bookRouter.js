const express = require('express');
const {
  getAllBooks,
  postBook,
  getOneBook,
  updateBook,
  deleteBook,
} = require('../controller/bookHandler');
const booksRouter = express.Router();

booksRouter.route('/').get(getAllBooks).post(postBook);
booksRouter.route('/:id').get(getOneBook).patch(updateBook).delete(deleteBook);

module.exports = booksRouter;
