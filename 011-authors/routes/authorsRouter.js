const express = require('express');
const {
  getAllAuthors,
  postAuthor,
  getOneAuthor,
  updateAuthor,
  deleteAuthor,
  checkId,
  checkBody,
} = require('../controller/authorsHandler');
const authorsRouter = express.Router();
authorsRouter.param('id', checkId);

authorsRouter.route('/').get(getAllAuthors).post(checkBody, postAuthor);
authorsRouter
  .route('/:id')
  .get(getOneAuthor)
  .patch(updateAuthor)
  .delete(deleteAuthor);

module.exports = authorsRouter;
