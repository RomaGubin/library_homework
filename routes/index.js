const express = require('express');
const router = express.Router();
const { stor } = require('./api/book');

router.get('/api/books/:id/download', (req, res) => {
  const { id } = req.params;
  const book = stor.book.find(book => book.id === id);
  if (book) {
    res.download(book.fileBook, book.fileName);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

router.post('/', (req, res) => {
  const { title, desc } = req.body;
  const { path, originalname } = req.uploadedFileInfo;
  const newBook = new Book({ title, desc, fileBook: path, fileName: originalname });
  stor.book.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const { title, desc } = req.body;
  const { id } = req.params;
  const { path, originalname } = req.uploadedFileInfo;
  const ind = stor.book.findIndex(el => el.id === id);
  if (ind !== -1) {
    stor.book[ind] = {
      ...stor.book[ind],
      title,
      desc,
      fileBook: path,
      fileName: originalname
    };
    res.json(stor.book[ind]);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

module.exports = router;