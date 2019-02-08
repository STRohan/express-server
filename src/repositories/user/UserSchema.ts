import { default as VersionableSchema } from '../versionable/VersionableSchema';
export default class UserSchema extends VersionableSchema {
  constructor(option: any) {
    const baseData = {
      _id: String,
      email : String,
      id: String,
      name: String,
      password: String,
      role: String,
    };
    super(baseData, option);
  }
}
