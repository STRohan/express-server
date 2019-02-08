import { IPermissions } from './interfaces';
export const module = 'module';
export const headTrainer: string = 'head-trainer';
export const trainee: string = 'trainee';
export const trainer: string = 'trainer';

export const permissions: IPermissions = {
  getUsers1: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    write: [trainer],
  },
  module: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    write: [trainer],
  },
};
