import * as mongoose from 'mongoose';
import { default as IUserModel } from './IUserModel';
import { UserModel } from './UserModel';
export default class Repository {
  public static genrateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  private model: mongoose.model<IUserModel>;
  constructor() {
    this.model = UserModel;
  }
  public count(): Promise<number> {
    return this.model.count();
  }
  public create(data: any): Promise<IUserModel> {
    return this.model.create({ ...data, _id: Repository.genrateObjectID() });
  }
  public delete(data: any): Promise<IUserModel> {
    return this.model.deleteOne(data);
  }
  public update(data: any, change: any): Promise<IUserModel> {
    return this.model.updateOne(data, change);
  }
  public findUser(data) {
    return this.model.findOne(data, (err, result) => {
      if (result) return result;
      return err;
    });
  }
}
