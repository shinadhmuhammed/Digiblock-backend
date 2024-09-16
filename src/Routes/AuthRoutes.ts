import { Router } from 'express';
import { authController } from '../Controllers/authController';


class AuthRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.post('/signup', authController.register);
    this.router.post('/login', authController.login);
  }
}

export const authRoutes = new AuthRoutes().router;
