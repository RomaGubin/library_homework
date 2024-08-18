import { Request, Response } from "express";

const notFoundMiddleware = (req: Request, res: Response): void => {
  res.status(404).render('errors/404', {
    title: '404 - Page Not Found'
  });
};

export default notFoundMiddleware;