"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_1 = __importDefault(require("./api/book"));
const book_2 = __importDefault(require("./api/book"));
const router = express_1.default.Router();
router.get('/api/books/:id/download', (req, res) => {
    const { id } = req.params;
    const book = book_1.default.books.find(book => book.id === id);
    if (book) {
        res.download(book.fileBook, book.fileName);
    }
    else {
        res.status(404).json('404 | страница не найдена');
    }
});
router.post('/', (req, res) => {
    const { title, desc } = req.body;
    const { path, originalname } = req.uploadedFileInfo || {};
    const newBook = new book_2.default({ title, description: desc, fileBook: path, fileName: originalname });
    book_1.default.books.push(newBook); // stor.books, а не stor.book
    res.status(201).json(newBook);
});
router.put('/:id', (req, res) => {
    const { title, desc } = req.body;
    const { id } = req.params;
    const { path, originalname } = req.uploadedFileInfo || {};
    const ind = book_1.default.books.findIndex(el => el.id === id);
    if (ind !== -1) {
        book_1.default.books[ind] = Object.assign(Object.assign({}, book_1.default.books[ind]), { title, description: desc, fileBook: path, fileName: originalname });
        res.json(book_1.default.books[ind]);
    }
    else {
        res.status(404).json('404 | страница не найдена');
    }
});
exports.default = router;
