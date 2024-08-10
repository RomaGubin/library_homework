// interface Book {
//   id: number, 
//   title: "string", 
//   description: "string", 
//   authors: "string", 
//   favorite: false, 
//   fileCover: "string", 
//   fileName: "string",
//   fileBook: "string"
// }

abstract class BooksRepository {
  createBook(/*book*/){
    console.log('Not Implement')
  }
  getBook(/*id*/){
    console.log('Not Implement')
  }
  getBooks(){
    console.log('Not Implement')
  }
  updateBook(/*id*/){
    console.log('Not Implement')
  }
  deleteBook(/*id*/){
    console.log('Not Implement')
  }
}

class Book extends BooksRepository {
  id: number; 
  title: "string"; 
  description: "string"; 
  authors: "string"; 
  favorite: false; 
  fileCover: "string"; 
  fileName: "string";
  fileBook: "string"
  constructor(
    id: number, 
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

//const book = new Book(id: 1221431,);