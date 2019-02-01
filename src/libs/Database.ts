import * as mongoose from "mongoose";
import {default as seed} from './seedData';
import {default as Repository} from"../repositories/user/UserRepository";
class Database {
  static open(mongoUrl) {
    return new Promise(function(resolve, reject) {
      mongoose
        .connect(
          mongoUrl,
          { useNewUrlParser: true },
        )
        .then(result => {resolve(result); seed();})
        .catch(err => reject(err));
    });
  }
  static disconnect() {
    mongoose.disconnect();
  }
}

export default Database;
