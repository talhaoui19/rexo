import mongoose from "mongoose";

const Schema = mongoose.Schema;
const models = mongoose.models;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  bio: String,
  resetToken: String,
  resetTokenExpiry: Date,
});

const UserModel = models.User || mongoose.model("User", userSchema);

export default UserModel;
