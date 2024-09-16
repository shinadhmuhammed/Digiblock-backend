import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

class UserModel {
  private userSchema: Schema;

  constructor() {
    this.userSchema = new Schema({
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    }, { timestamps: true });
  }

  public getModel() {
    return mongoose.model<IUser>('User', this.userSchema);
  }
}

export const User = new UserModel().getModel();
