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
  books: [] as Book[],
};

// Пример данных для демонстрации
[1, 2, 3].map(el => {
  const newBook = new Book({
    title: `book ${el}`,
    description: `description ${el}`,
    authors: `author ${el}`
  });
  stor.books.push(newBook);
});

router.get('/', (req: Request, res: Response) => {
  res.render('books/index', {
    title: 'Books',
    books: stor.books
  });
});

router.get('/create', (req: Request, res: Response) => {
  res.render('books/create', { title: 'Create Book' });
});

router.post('/create', (req: Request, res: Response) => {
  const { title, description, authors, favorite } = req.body;
  const newBook = new Book({ title, description, authors, favorite: !!favorite });
  stor.books.push(newBook);
  res.redirect('/book');
});

router.get('/update/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const book = stor.books.find(book => book.id === id);
  if (book) {
    res.render('books/update', { title: 'Update Book', book });
  } else {
    res.status(404).render('errors/404', { title: '404 - Page Not Found' });
  }
});

router.post('/update/:id', (req: Request, res: Response) => {
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

router.post('/delete/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const index = stor.books.findIndex(book => book.id === id);
  if (index !== -1) {
    stor.books.splice(index, 1);
    res.redirect('/book');
  } else {
    res.status(404).render('errors/404', { title: '404 - Page Not Found' });
  }
});

export default router;