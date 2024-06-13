const express = require('express');
const path = require('path');
const demoRouter = require('./routes/demo');
const apiBookRouter = require('./routes/api/book');
const webBookRouter = require('./routes/web/book');
const webUserRouter = require('./routes/web/user');  // Подключаем маршруты для пользователей
const errorMiddleware = require('./middleware/error');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/demo', demoRouter);
app.use('/api/books', apiBookRouter);
app.use('/book', webBookRouter);
app.use('/user', webUserRouter);  // Добавляем маршрут для пользователей

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
