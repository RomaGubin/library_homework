"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BooksRepository = /** @class */ (function () {
    function BooksRepository() {
    }
    BooksRepository.prototype.createBook = function ( /*book*/) {
        console.log('Not Implement');
    };
    BooksRepository.prototype.getBook = function ( /*id*/) {
        console.log('Not Implement');
    };
    BooksRepository.prototype.getBooks = function () {
        console.log('Not Implement');
    };
    BooksRepository.prototype.updateBook = function ( /*id*/) {
        console.log('Not Implement');
    };
    BooksRepository.prototype.deleteBook = function ( /*id*/) {
        console.log('Not Implement');
    };
    return BooksRepository;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(id, title, description, authors, favorite, fileCover, fileName, fileBook) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.title = title;
        _this.description = description;
        _this.authors = authors;
        _this.favorite = favorite;
        _this.fileCover = fileCover;
        _this.fileName = fileName;
        _this.fileBook = fileBook;
        return _this;
    }
    return Book;
}(BooksRepository));
//const book = new Book(id: 1221431,);
