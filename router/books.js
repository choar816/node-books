const express = require('express');
const router = express.Router();
let books = require('../database/Books');

router.get('/', (req, res, next) => {
  console.log(req.query);
  res.render('books.html', { books });
});

router.get('/write', (req, res, next) => {
  res.render('write.html');
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const book = books.find((book) => book.id == id);
  res.render('bookDetail.html', { book });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  const id = books.length + 1;
  const title = req.body.title;
  const author = req.body.author;
  const star = req.body.star;
  const review = req.body.review;
  const reviewDate = new Date();

  const book = { id, title, author, star, review, reviewDate };
  books.push(book);
  // res.status(201).json(books);
  res.redirect('/books');
});

module.exports = router;
