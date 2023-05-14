const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: `${__dirname}/config.env` });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then(() => {
  console.log('Your database connected successfully !!!');
});
const authorScheme = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: [true, 'There is no Id number !!! '],
  },
  name: {
    type: String,
    unique: true,
    required: [true, 'There is no name !!! '],
  },
  age: {
    type: Boolean || Number,
    default: false,
  },
  bookNumber: {
    type: Number,
    required: [true, 'There is no book number !!! '],
  },
  nationality: {
    type: String,
    required: [true, 'There is no nationality !!! '],
  },
  ratingsAverage: {
    type: Number,
    default: 5.5,
  },
  prize: {
    type: Array || Boolean,
  },
  books: {
    type: Array,
    required: [true, 'There are no books !!! '],
  },
  description: {
    type: String,
    required: [true, 'There is no description !!! '],
  },
  imageCover: {
    type: String,
    required: [true, 'There is no cover image !!! '],
  },
  images: {
    type: Array,
    required: [true, 'There are no images !!! '],
  },
});
const Author = mongoose.model('Author', authorScheme);

const app = require('./app');

app.listen(process.env.PORT, () => {});
