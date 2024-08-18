import express, { Request, Response } from "express";
import { v4 as uuid } from "uuid";

const router = express.Router();

interface BookProps {
  id?: string;
  title?: string;
  description?: string;
  authors?: string;
  favorite?: boolean;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

class Book {
  id: string;
  title: string;
  description: string;
  authors: string;
  favorite: boolean;
  fileCover: string;
  fileName: string;
  fileBook: string;

  constructor({
    id = uuid(),
    title = "string",
    description = "string",
    authors = "string",
    favorite = false,
    fileCover = "string",
    fileName = "string",
    fileBook = "string"
  }: BookProps = {}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
    this.fileBook = fileBook;
  }
}

const stor = {
  book: [] as Book[],
};

// Инициализация массива книг
[1, 2, 3].map(el => {
    const newBook = new Book({ title: `book ${el}`, description: `description book ${el}` });
    stor.book.push(newBook);
});

// Получить все книги
router.get('/', (req: Request, res: Response) => {
  res.json(stor.book);
});

// Получить книгу по id
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const book = stor.book.find(book => book.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json('404 | Book not found');
  }
});

// Добавить новую книгу
router.post('/', (req: Request, res: Response) => {
  const { title, description } = req.body;
  const newBook = new Book({ title, description });
  stor.book.push(newBook);
  res.status(201).json(newBook);
});

// Обновить книгу по id
router.put('/:id', (req: Request, res: Response) => {
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

// Удалить книгу по id
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const index = stor.book.findIndex(book => book.id === id);
  if (index !== -1) {
    stor.book.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json('404 | Book not found');
  }
});

export default router;
