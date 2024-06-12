const express = require("express");
const demoRouter = require('./routes/demo');
const indexRouter = require('./routes/index');
const bookRouter = require('./routes/book').router; // Экспортируем только роутер
const errorMiddleware = require('./middleware/error');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const stor = {
  book: [],
  user: [],
};

app.get('/api/books/:id/download', (req, res) => {
  const { id } = req.params;
  const book = stor.book.find(book => book.id === id);
  if (book) {
    res.download(book.fileBook, book.fileName);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

app.use('/demo', demoRouter);
app.use('/book', bookRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});