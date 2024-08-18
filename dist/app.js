"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksRepositoryImpl = exports.BooksRepository = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
class BooksRepository {
}
exports.BooksRepository = BooksRepository;
let BooksRepositoryImpl = class BooksRepositoryImpl extends BooksRepository {
    createBook(book) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getBook(id) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    updateBook(id, book) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
};
exports.BooksRepositoryImpl = BooksRepositoryImpl;
exports.BooksRepositoryImpl = BooksRepositoryImpl = __decorate([
    (0, inversify_1.injectable)()
], BooksRepositoryImpl);
