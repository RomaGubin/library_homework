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
  book: [],
};

[1, 2, 3].map(el => {
    const newBook = new Book({ title: `book ${el}`, description: `description book ${el}` });
    stor.book.push(newBook);
});

router.get('/', (req, res) => {
  res.json(stor.book);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const book = stor.book.find(book => book.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json('404 | Book not found');
  }
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newBook = new Book({ title, description });
  stor.book.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const book = stor.book.find(book => book.id === id);
  if (book) {
    book.title = title;
    book.description = description;
    res.json(book);
  } else {
    res.status(404).json('404 | Book not found');
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = stor.book.findIndex(book => book.id === id);
  if (index !== -1) {
    stor.book.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json('404 | Book not found');
  }
});

module.exports = router;
