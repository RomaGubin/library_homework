"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
//import { File } from 'multer'; // Типизация для файла
// Определение хранилища с типизацией
const storage = multer_1.default.diskStorage({
    destination(req, file, cb) {
        cb(null, 'books/file');
    },
    filename(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
// Экспорт настроенного multer
const fileMulter = (0, multer_1.default)({ storage });
exports.default = fileMulter;
