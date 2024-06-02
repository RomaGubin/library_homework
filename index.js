// подключение express
const express = require("express");
const { v4: uuid } = require('uuid');
const demoRouter = require('./routes/demo');
const indexRouter = require('./routes/index');
//const Book = require('./models/book');

class Book {
  constructor({ 
    id = uuid(), 
    title = "string", 
    description = "string", 
    authors = "string", 
    favorite = Boolean, 
    fileCover = "string", 
    fileName = "string",
    fileBook = "string"
  } = {}) {
    Object.assign(this, { id, title, description, authors, favorite, fileCover, fileName });
  }
}

class User {
  constructor({ 
    id = "string", 
    mail = "string", 
  } = {}) {
    Object.assign(this, { id, mail });
  }
}

const stor = {
  book: [],
  user: [],
};

// создаем объект приложения
const app = express();
app.use(express.json())

app.post('/api/user/login', (req, res) => {
  const {id, mail} = { id: 1, mail: 'test@mail.ru'};

  const newUser = new User ({id, mail})
  stor.user.push(newUser)

  res.status(201)
  res.json(newUser)
})

app.get('/api/books', (req, res) => {
  const {book} = stor
  res.json(book)
})

app.get('/api/books/:id', (req, res) => {
  const { book } = stor;
  const { id } = req.params;
  const ind = book.findIndex(el => el.id === id);

  if (ind !== -1) {
    res.json(book[ind]);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

app.post('/api/books', (req, res) => {
  const {book} = stor
  const {title, desc} = req.body

  const newBook = new Book({title, desc})
  book.push(newBook)

  res.status(201)
  res.json(newBook)
})

app.put('/api/books/:id', (req, res) => {
  const { book } = stor;
  const { title, desc } = req.body;
  const { id } = req.params;
  const ind = book.findIndex(el => el.id === id);

  if (ind !== -1) {
    book[ind] = {
      ...book[ind],
      title,
      desc,
    };

    res.json(book[ind]);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

app.delete('/api/books/:id', (req, res) => {
  const { book } = stor;
  const { id } = req.params;
  const ind = book.findIndex(el => el.id === id);

  if (ind !== -1) {
    book.splice(ind, 1);
    res.json('ok');
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

app.use('/api/books/:id/download', (req, res) => {
  const { id } = req.params;
  const book = stor.book.find(book => book.id === id);
  if (book) {
    res.download(book.fileBook, book.fileName);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

app.use('/demo', demoRouter);
app.use('/api/books/:id/download', indexRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT);