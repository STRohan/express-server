import * as mongoose from "mongoose";

export default interface IUserModel extends mongoose.Document {
  id: string;
  name: string;
  name2: string;
}
