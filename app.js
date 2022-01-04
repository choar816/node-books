const nunjucks = require('nunjucks');
const express = require('express');
const cors = require('cors');
const path = require('path');
const dateFilter = require('nunjucks-date-filter');
const bookRouter = require('./router/book.js');

const app = express();
app.set('view engine', 'html');

경로 = path.join(path.join(__dirname + '/resource'), '/static');
console.log(경로);

app.use('/', express.static(경로));
app.use('/book', express.static(경로));

let env = nunjucks.configure('resource/template', {
  autoescape: true,
  express: app,
  watch: true,
});
env.addFilter('date', dateFilter);

app.use(express.json());
app.use(cors());

app.use('/book', bookRouter);

app.get('/', (req, res, next) => {
  res.render('main.html');
});

app.listen(8080);
