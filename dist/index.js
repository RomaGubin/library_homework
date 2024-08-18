"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const demo_1 = __importDefault(require("./routes/demo"));
const book_1 = __importDefault(require("./routes/api/book"));
const book_2 = __importDefault(require("./routes/web/book"));
const user_1 = __importDefault(require("./routes/web/user"));
const error_1 = __importDefault(require("./middleware/error"));
const app = (0, express_1.default)();
// Middleware для работы с JSON и URL-кодированными данными
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Настройка путей к шаблонам и движку шаблонов
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Подключение маршрутов
app.use('/demo', demo_1.default);
app.use('/api/books', book_1.default);
app.use('/book', book_2.default);
app.use('/user', user_1.default); // Добавляем маршрут для пользователей
// Обработка ошибок
app.use(error_1.default);
// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
