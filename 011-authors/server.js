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
    type: Boolean && Number,
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

const newAuthor = new Author({
  id: 0,
  name: 'Steve Toltz',
  age: 51,
  bookNumber: 3,
  nationality: 'australia',
  ratingsAverage: 7.4,
  prize: [
    '2008 Man Booker Prize',
    '2008 Guardian First Book Award',
    '2015 the Russell Prize',
  ],
  books: ['A Fraction of the Whole', 'Here Goes Nothing', 'Quicksand'],
  description:
    'Toltz attended Killara High School and graduated from the University of Newcastle, New South Wales, in 1994. Prior to his literary career, he lived in Montreal, Vancouver, New York City, Barcelona, and Paris, variously working as a cameraman, telemarketer, security guard, private investigator, English teacher, and screenwriter.Toltz married French-Australian artist and painter Marie Peter-Toltz in 2005. They have one son born in 2012. ',
  imageCover: 'tour-1-cover.jpg',
  images: ['tour-1-1.jpg', 'tour-1-2.jpg', 'tour-1-3.jpg'],
});
newAuthor
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log('Error !!! ==> ', err);
  });

const app = require('./app');

app.listen(process.env.PORT, () => {});
