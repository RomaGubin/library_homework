"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const router = express_1.default.Router();
class Book {
    constructor({ id = (0, uuid_1.v4)(), title = "string", description = "string", authors = "string", favorite = false, fileCover = "string", fileName = "string", fileBook = "string" } = {}) {
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
    book: [],
};
// Инициализация массива книг
[1, 2, 3].map(el => {
    const newBook = new Book({ title: `book ${el}`, description: `description book ${el}` });
    stor.book.push(newBook);
});
// Получить все книги
router.get('/', (req, res) => {
    res.json(stor.book);
});
// Получить книгу по id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const book = stor.book.find(book => book.id === id);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).json('404 | Book not found');
    }
});
// Добавить новую книгу
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newBook = new Book({ title, description });
    stor.book.push(newBook);
    res.status(201).json(newBook);
});
// Обновить книгу по id
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const book = stor.book.find(book => book.id === id);
    if (book) {
        book.title = title;
        book.description = description;
        res.json(book);
    }
    else {
        res.status(404).json('404 | Book not found');
    }
});
// Удалить книгу по id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = stor.book.findIndex(book => book.id === id);
    if (index !== -1) {
        stor.book.splice(index, 1);
        res.status(204).end();
    }
    else {
        res.status(404).json('404 | Book not found');
    }
});
exports.default = router;
