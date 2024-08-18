import express, { Request, Response } from "express";
import stor from "./api/book";
import Book from "./api/book";
import { MulterRequest } from "../types"; // Типизация для uploadedFileInfo

const router = express.Router();

router.get('/api/books/:id/download', (req: Request, res: Response) => {
  const { id } = req.params;
  const book = stor.books.find(book => book.id === id);
  if (book) {
    res.download(book.fileBook, book.fileName);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

router.post('/', (req: MulterRequest, res: Response) => {
  const { title, desc } = req.body;
  const { path, originalname } = req.uploadedFileInfo || {};
  const newBook = new Book({ title, description: desc, fileBook: path, fileName: originalname });
  stor.books.push(newBook); // stor.books, а не stor.book
  res.status(201).json(newBook);
});

router.put('/:id', (req: MulterRequest, res: Response) => {
  const { title, desc } = req.body;
  const { id } = req.params;
  const { path, originalname } = req.uploadedFileInfo || {};
  const ind = stor.books.findIndex(el => el.id === id);
  if (ind !== -1) {
    stor.books[ind] = {
      ...stor.books[ind],
      title,
      description: desc,
      fileBook: path,
      fileName: originalname
    };
    res.json(stor.books[ind]);
  } else {
    res.status(404).json('404 | страница не найдена');
  }
});

export default router;
