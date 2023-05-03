const express = require('express');
const {
  getAllBooks,
  postBook,
  getOneBook,
  updateBook,
  deleteBook,
  checkId,
} = require('../controller/bookHandler');
const booksRouter = express.Router();
booksRouter.param('id', checkId);
booksRouter.route('/').get(getAllBooks).post(postBook);
booksRouter.route('/:id').get(getOneBook).patch(updateBook).delete(deleteBook);

module.exports = booksRouter;
