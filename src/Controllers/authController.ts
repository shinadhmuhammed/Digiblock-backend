import { Request, Response } from 'express';
import { authService } from '../Services/auth.services';

class AuthController {
    //Register User
  public async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const user = await authService.register(username, email, password);
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  // Login user 
  public async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await authService.login(email, password);  
      res.status(200).json({ message: 'Login successful', user });  
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }
}

export const authController = new AuthController();
