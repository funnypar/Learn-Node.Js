exports.checkId = (req, res, next, value) => {
  if (value > books.length) {
    return res.status(404).json({
      status: 'Not Found',
      massage: 'This id is not valid !!!',
    });
  }
  next();
};
exports.getAllBooks = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This Part has not implemented !!!',
  });
};
exports.postBook = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This Part has not implemented !!!',
  });
};
exports.getOneBook = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This Part has not implemented !!!',
  });
};
exports.updateBook = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This Part has not implemented !!!',
  });
};
exports.deleteBook = (req, res) => {
  res.status(500).json({
    status: 'error',
    massage: 'This Part has not implemented !!!',
  });
};
