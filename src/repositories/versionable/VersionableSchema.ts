import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(collections, option: any) {
    const baseData = Object.assign({
      createdAt : {
        default : new Date(),
        required : true,
        type : Date,
      },
      deletedAt : {
        require : false,
        type : Date,

      },
      originalId : {
        required : true,
        type : String,
      },
      updatedAt : {
        required : false,
        type : Date,
      },
    },
    collections);
    super(baseData, option);
  }
  }
