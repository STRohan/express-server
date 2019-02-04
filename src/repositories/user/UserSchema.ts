import * as mongoose from 'mongoose';
export default class UserSchema extends mongoose.Schema {
  constructor(option: any) {
    const baseData = {
      _id: String,
      id: String,
      name: String,
      role: String,

    };
    super(baseData, option);
  }
}
