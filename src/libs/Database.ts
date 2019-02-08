import * as mongoose from 'mongoose';
import { default as Repository } from '../repositories/user/UserRepository';
import { default as seed } from './seedData';
class Database {
  public static async open(mongoUrl) {
    return  new Promise( async (resolve, reject) => {
      try {
        const result = await mongoose.connect(mongoUrl, { useNewUrlParser: true });
        await resolve(result);
        await seed(); }
        catch (err) { reject(err); }
    });
  }
  public static disconnect() {
    mongoose.disconnect();
  }
}

export default Database;
