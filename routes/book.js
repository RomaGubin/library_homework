const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

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
    Object.assign(this, { id, title, description, authors, favorite, fileCover, fileName, fileBook });
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

[1, 2, 3].map(el => {
    const newBook = new Book({ title: `book ${el}`, description: `description book ${el}` });
    stor.book.push(newBook);
});

router.post('/api/user/login', (req, res) => {
  const {id, mail} = { id: 1, mail: 'test@mail.ru'};

  const newUser = new User ({id, mail})
  stor.user.push(newUser)

  res.status(201)
  res.json(newUser)
})

router.get('/api/books', (req, res) => {
  const { book } = stor
  res.json(book)
})

router.get('/api/books/:id', (req, res) => {
  const { book } = stor;
  const { id } = req.params;
  const ind = book.findIndex(el => el.id === id);

  if (ind !== -1) {
    res.json(book[ind]);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

router.post('/api/books', (req, res) => {
  const { book } = stor
  const { title, description } = req.body

  const newBook = new Book({title, description})
  book.push(newBook)

  res.status(201)
  res.json(newBook)
})

router.put('/api/books/:id', (req, res) => {
  const { book } = stor;
  const { title, description } = req.body;
  const { id } = req.params;
  const ind = book.findIndex(el => el.id === id);

  if (ind !== -1) {
    book[ind] = {
      ...book[ind],
      title,
      description,
    };

    res.json(book[ind]);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

router.delete('/api/books/:id', (req, res) => {
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

router.use('/api/books/:id/download', (req, res) => {
  const { id } = req.params;
  const book = stor.book.find(book => book.id === id);
  if (book) {
    res.download(book.fileBook, book.fileName);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

module.exports = { router, stor };
