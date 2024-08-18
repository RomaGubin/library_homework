import express, { Request, Response } from "express";
import { v4 as uuid } from "uuid";

const router = express.Router();

interface UserProps {
  id?: string;
  name?: string;
  email?: string;
}

class User {
  id: string;
  name: string;
  email: string;

  constructor({
    id = uuid(),
    name = "string",
    email = "string"
  }: UserProps = {}) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

const stor = {
  users: [] as User[],
};

// Пример данных для демонстрации
[1, 2, 3].forEach(el => {
  const newUser = new User({
    name: `user ${el}`,
    email: `user${el}@example.com`
  });
  stor.users.push(newUser);
});

router.get('/', (req: Request, res: Response) => {
  res.render('users/index', {
    title: 'Users',
    users: stor.users
  });
});

router.get('/create', (req: Request, res: Response) => {
  res.render('users/create', { title: 'Create User' });
});

router.post('/create', (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  stor.users.push(newUser);
  res.redirect('/user');
});

router.get('/update/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const user = stor.users.find(user => user.id === id);
  if (user) {
    res.render('users/update', { title: 'Update User', user });
  } else {
    res.status(404).render('errors/404', { title: '404 - Page Not Found' });
  }
});

router.post('/update/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = stor.users.find(user => user.id === id);
  if (user) {
    user.name = name;
    user.email = email;
    res.redirect('/user');
  } else {
    res.status(404).render('errors/404', { title: '404 - Page Not Found' });
  }
});

router.post('/delete/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const index = stor.users.findIndex(user => user.id === id);
  if (index !== -1) {
    stor.users.splice(index, 1);
    res.redirect('/user');
  } else {
    res.status(404).render('errors/404', { title: '404 - Page Not Found' });
  }
});

export default router;
