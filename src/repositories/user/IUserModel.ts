import { default as IVersionableModel } from '../versionable/IVersionableModel';

export default interface IUserModel extends IVersionableModel {
  id: string;
  name: string;
  role: string;
}
