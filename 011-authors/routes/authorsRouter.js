const express = require('express');
const {
  getAllAuthors,
  postAuthor,
  getOneAuthor,
  updateAuthor,
  deleteAuthor,
  checkId,
} = require('../controller/authorsHandler');
const authorsRouter = express.Router();
authorsRouter.param('id', checkId);
authorsRouter.route('/').get(getAllAuthors).post(postAuthor);
authorsRouter
  .route('/:id')
  .get(getOneAuthor)
  .patch(updateAuthor)
  .delete(deleteAuthor);

module.exports = authorsRouter;
