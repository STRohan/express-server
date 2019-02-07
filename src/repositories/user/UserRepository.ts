import * as mongoose from 'mongoose';
import { default as VersionableRepository } from '../versionable/VersionableRepository';
import { default as IUserModel } from './IUserModel';
import { UserModel } from './UserModel';
export default class Repository extends VersionableRepository <IUserModel, mongoose.Model<IUserModel>> {
  public static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  constructor() {
    super (UserModel);
  }
  public create(data: any): Promise<IUserModel> {
    return this.genericCreate(data);
  }
  public update(data: any, change: any ): Promise<IUserModel> {
  return this.genericUpdate(data, change);
  }
    public delete(data): Promise<IUserModel> {
    return this.genericDelete(data);
  }
}
