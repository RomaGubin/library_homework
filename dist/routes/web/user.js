"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const router = express_1.default.Router();
class User {
    constructor({ id = (0, uuid_1.v4)(), name = "string", email = "string" } = {}) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
const stor = {
    users: [],
};
// Пример данных для демонстрации
[1, 2, 3].forEach(el => {
    const newUser = new User({
        name: `user ${el}`,
        email: `user${el}@example.com`
    });
    stor.users.push(newUser);
});
router.get('/', (req, res) => {
    res.render('users/index', {
        title: 'Users',
        users: stor.users
    });
});
router.get('/create', (req, res) => {
    res.render('users/create', { title: 'Create User' });
});
router.post('/create', (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    stor.users.push(newUser);
    res.redirect('/user');
});
router.get('/update/:id', (req, res) => {
    const { id } = req.params;
    const user = stor.users.find(user => user.id === id);
    if (user) {
        res.render('users/update', { title: 'Update User', user });
    }
    else {
        res.status(404).render('errors/404', { title: '404 - Page Not Found' });
    }
});
router.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = stor.users.find(user => user.id === id);
    if (user) {
        user.name = name;
        user.email = email;
        res.redirect('/user');
    }
    else {
        res.status(404).render('errors/404', { title: '404 - Page Not Found' });
    }
});
router.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    const index = stor.users.findIndex(user => user.id === id);
    if (index !== -1) {
        stor.users.splice(index, 1);
        res.redirect('/user');
    }
    else {
        res.status(404).render('errors/404', { title: '404 - Page Not Found' });
    }
});
exports.default = router;
