import { IPermissions } from "./interfaces";

export const module = "module",
  headTrainer: string = "head-trainer",
  trainee: string = "trainee",
  trainer: string = "trainer";

export const permissions: IPermissions = {
  module: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  },
  getUsers1: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};
