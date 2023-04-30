const express = require('express');
const {
  getAllAuthors,
  postAuthor,
  getOneAuthor,
  updateAuthor,
  deleteAuthor,
} = require('../controller/authorsHandler');
const authorsRouter = express.Router();

authorsRouter.route('/').get(getAllAuthors).post(postAuthor);
authorsRouter
  .route('/:id')
  .get(getOneAuthor)
  .patch(updateAuthor)
  .delete(deleteAuthor);

module.exports = authorsRouter;
