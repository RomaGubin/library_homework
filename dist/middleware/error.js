"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundMiddleware = (req, res) => {
    res.status(404).render('errors/404', {
        title: '404 - Page Not Found'
    });
};
exports.default = notFoundMiddleware;
