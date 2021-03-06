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

router.get('/edit/:id', (req, res, next) => {
  console.log(req.params);
  const id = req.params.id;
  const book = books.find((book) => book.id == id);

  res.render('edit.html', { book });
});

router.post('/edit/:id', (req, res, next) => {
  console.log(req.body);
  const id = req.body.id;
  const book = books.find((book) => book.id == id);
  
  if (book) {
    book.title = req.body.title;
    book.author = req.body.author;
    book.star = req.body.star;
    book.review = req.body.review;
    book.reviewDate = new Date();
    res.redirect('/books');
  } else {
    res.status(404);
  }
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
  res.redirect('/books');
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  books = books.filter((book) => book.id != id);
  res.redirect('/books');
})

module.exports = router;
