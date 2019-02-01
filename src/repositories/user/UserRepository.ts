import {UserModel} from"./UserModel";
import * as mongoose  from "mongoose";
import { default as IUserModel} from "./IUserModel";
export default class Repository {
  private model: mongoose.model<IUserModel>;
  constructor() {
    this.model = UserModel;
  }
  public static genrateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  public create(data:any): Promise<IUserModel>{
      return this.model.create({...data,_id: Repository.genrateObjectID()});
    }

    public  delete(data:any):Promise<IUserModel>{
      return this.model.deleteOne(data);
    }
    public  update(data:any,change:any):Promise<IUserModel>{
      return this.model.updateOne(data,change);
    }

  }

