import express, { Request, Response, NextFunction } from "express";
import path from "path";
import demoRouter from "./routes/demo";
import apiBookRouter from "./routes/api/book";
import webBookRouter from "./routes/web/book";
import webUserRouter from "./routes/web/user";
import errorMiddleware from "./middleware/error";

const app = express();

// Middleware для работы с JSON и URL-кодированными данными
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Настройка путей к шаблонам и движку шаблонов
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Подключение маршрутов
app.use('/demo', demoRouter);
app.use('/api/books', apiBookRouter);
app.use('/book', webBookRouter);
app.use('/user', webUserRouter);  // Добавляем маршрут для пользователей

// Обработка ошибок
app.use(errorMiddleware);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
