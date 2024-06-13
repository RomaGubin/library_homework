const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

class Book {
  constructor({ 
    id = uuid(), 
    title = "string", 
    description = "string", 
    authors = "string", 
    favorite = false, 
    fileCover = "string", 
    fileName = "string", 
    fileBook = "string" 
  } = {}) {
    Object.assign(this, { id, title, description, authors, favorite, fileCover, fileName, fileBook });
  }
}

const stor = {
  books: [],
};

// Пример данных для демонстрации
[1, 2, 3].map(el => {
    const newBook = new Book({ title: `book ${el}`, description: `description ${el}`, authors: `author ${el}` });
    stor.books.push(newBook);
});

router.get('/', (req, res) => {
  res.render('books/index', {
    title: 'Books',
    books: stor.books
  });
});

router.get('/create', (req, res) => {
  res.render('books/create', { title: 'Create Book' });
});

router.post('/create', (req, res) => {
  const { title, description, authors, favorite } = req.body;
  const newBook = new Book({ title, description, authors, favorite: !!favorite });
  stor.books.push(newBook);
  res.redirect('/book');
});

router.get('/update/:id', (req, res) => {
  const { id } = req.params;
  const book = stor.books.find(book => book.id === id);
  if (book) {
    res.render('books/update', { title: 'Update Book', book });
  } else {
    res.status(404).render('errors/404', { title: '404 - Page Not Found' });
  }
});

router.post('/update/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, authors, favorite } = req.body;
  const book = stor.books.find(book => book.id === id);
  if (book) {
    book.title = title;
    book.description = description;
    book.authors = authors;
    book.favorite = !!favorite;
    res.redirect('/book');
  } else {
    res.status(404).render('errors/404', { title: '404 - Page Not Found' });
  }
});

router.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  const index = stor.books.findIndex(book => book.id === id);
  if (index !== -1) {
    stor.books.splice(index, 1);
    res.redirect('/book');
  } else {
    res.status(404).render('errors/404', { title: '404 - Page Not Found' });
  }
});

module.exports = router;
