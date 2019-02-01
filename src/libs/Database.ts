import * as mongoose from 'mongoose';
import { default as Repository } from '../repositories/user/UserRepository';
import { default as seed } from './seedData';
class Database {
  public static open(mongoUrl) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUrl,
          { useNewUrlParser: true },
        )
        .then((result) => {resolve(result); seed(); })
        .catch((err) => reject(err));
    });
  }
  public static disconnect() {
    mongoose.disconnect();
  }
}

export default Database;
