export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email?: string;
  password: string;
  bio: string;
  resetToken?: string;
  resetTokenExpiry?: Date;
}
