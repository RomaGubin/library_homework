import "reflect-metadata";
import { Container } from "inversify";
import { BooksRepositoryImpl } from "./app";
import { BooksRepository } from "./app";

const container = new Container();
container.bind<BooksRepository>(BooksRepository).to(BooksRepositoryImpl);

class Book {

}

interface IBooksRepository {
  createBook(book: any): Promise<Book[]>;
  getBook(id: string): Promise<Book[]>;
  getBooks(): Promise<Book[]>;
  updateBook(id: string, book: any): Promise<Book[]>;
  deleteBook(id: string): Promise<Book[]>;
}

export class BookService {
  repository: IBooksRepository;
  constructor(repository: IBooksRepository) {
    this.repository = repository;
  }
}