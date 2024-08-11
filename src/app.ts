import "reflect-metadata";
import { injectable } from "inversify";

export abstract class BooksRepository {
  abstract createBook(book: any): Promise<any>;
  abstract getBook(id: string): Promise<any>;
  abstract getBooks(): Promise<any>;
  abstract updateBook(id: string, book: any): Promise<any>;
  abstract deleteBook(id: string): Promise<any>;
}

@injectable()
export class BooksRepositoryImpl extends BooksRepository {
  async createBook(book: any): Promise<any> {}
  async getBook(id: string): Promise<any> {}
  async getBooks(): Promise<any> {}
  async updateBook(id: string, book: any): Promise<any> {}
  async deleteBook(id: string): Promise<any> {}
}

/*
class Book extends BooksRepository {
  id: string; 
  title: "string"; 
  description: "string"; 
  authors: "string"; 
  favorite: false; 
  fileCover: "string"; 
  fileName: "string";
  fileBook: "string"
  constructor(
    id: string, 
    title: "string", 
    description: "string", 
    authors: "string", 
    favorite: false, 
    fileCover: "string", 
    fileName: "string", 
    fileBook: "string") {
      super();
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
*/
//const book = new Book(id: 1221431,);