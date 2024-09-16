import bcrypt from 'bcryptjs';
import { User,IUser } from '../Models/userModel';


class AuthService {


  constructor() {}

  public async register(username: string, email: string, password: string): Promise<IUser> {
    const userExists = await User.findOne({ email });
    if (userExists) throw new Error('User already exists');
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    return user;
  }

  public async login(email: string, password: string): Promise<IUser> {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');  

    const isMatch = await bcrypt.compare(password, user.password); 
    if (!isMatch) throw new Error('Invalid credentials');  

    return user;  
  }
}

export const authService = new AuthService();
