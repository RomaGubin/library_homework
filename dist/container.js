"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const app_1 = require("./app");
const app_2 = require("./app");
const container = new inversify_1.Container();
container.bind(app_2.BooksRepository).to(app_1.BooksRepositoryImpl);
class Book {
}
class BookService {
    constructor(repository) {
        this.repository = repository;
    }
}
exports.BookService = BookService;
