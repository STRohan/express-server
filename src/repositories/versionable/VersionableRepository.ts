import * as mongoose from 'mongoose';

export default class VersionableRepository< D extends mongoose.Document, M extends mongoose.Model<D>> {
  public static generateObjectID() {
    return String(mongoose.Types.ObjectId());
  }
  private versModel: M;
  constructor(Model) {
    this.versModel = Model;
  }
  public findUser(data) {
    return this.versModel.findOne(data).lean();
  }
  public count() {
    return this.versModel.countDocuments();
  }
  public genericCreate(data: any): Promise<D> {
    const id = VersionableRepository.generateObjectID();
    const save = {...data };
    save._id = id;
    save.originalId = id;
    delete save.deletedAt;
    return this.versModel.create( save);
  }
  public async genericDocCreate(data: any): Promise<D> {
    const id = VersionableRepository.generateObjectID();
    const saveData = Object.assign({}, data);
    saveData._id = id;
    delete saveData.deletedAt;
    const newData = await this.versModel.create(saveData);
    return newData;
    }
  public async genericUpdate(data: any, change: any): Promise<D> {
    const { originalId } = change;
    const data1 = await this.versModel.findOne({ originalId, deletedAt: { $exists: false }});
    const dataToInsert = Object.assign( data, data1, change );
    await this.genericDocCreate(dataToInsert);
    await this.versModel.updateOne(
      { _id: data1._id, deletedAt: { $exists: false } }, {deletedAt: Date.now()});
    return;
  }
  public async genericDelete(data: any ): Promise<D> {
    const{originalId} = data;
    await this.versModel.findOne({ originalId, deletedAt: { $exists: false } });
    await this.versModel.updateOne(
      { originalId, deletedAt: { $exists: false } }, {deletedAt: Date.now()});
    return;
  }
}
