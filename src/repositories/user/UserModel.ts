import * as mongoose from "mongoose";
import { default as IUserModel } from "./IUserModel";
import  UserSchema  from "./UserSchema";

const userSchema = new UserSchema({ collection: "user" });

export const UserModel: mongoose.Model<IUserModel> = mongoose.model(
  "user",
  userSchema,
  "user",
  true
);
