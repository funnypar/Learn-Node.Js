const express = require('express');

const app = express();

const port = 8080;

app.get('/', (req, res) => {
  res.status(200).json({
    author: 'Steve Toltz',
    books: ['A Fraction of the Whole', 'Here Goes Nothing', 'Quicksand'],
  });
});
app.post('/', (req, res) => {
  res.status(200).send('Hi From Post !!!');
});
app.listen(port, () => {
  console.log('hello from the server !!!');
});
