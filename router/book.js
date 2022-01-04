const express = require('express');
let books = require('../database/Book');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('book.html', { books });
});

module.exports = router;