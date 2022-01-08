const nunjucks = require('nunjucks');
const dateFilter = require('nunjucks-date-filter');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');

const bookRouter = require('./router/books.js');
const books = require('./database/Books');

const app = express();
app.set('view engine', 'html');

경로 = path.join(path.join(__dirname + '/resource'), '/static');
console.log(경로);

app.use('/', express.static(경로));
app.use('/books', express.static(경로));

let env = nunjucks.configure('resource/template', {
  autoescape: true,
  express: app,
  watch: true,
});
env.addFilter('date', dateFilter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res, next) => {
  res.render('main.html');
});

app.use('/books', bookRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.log('Error!');
  console.log(err);
  res.sendStatus(500);
});

app.listen(8080);
