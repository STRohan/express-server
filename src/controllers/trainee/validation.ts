const validation = {
  create: {
    email: {
      in: ['body'],
      regex: /^[\w-\.]+@(successive.tech)$/,
      required: true,
      string: true,
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
      custom(values) {
        console.log('Value', values);
        // throw { error: "Error Occurred", message: "Message" };
      },
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: /^[a-zA-Z\s]+$/,
      required: true,
    },
    role: {
      in: ['body'],
      regex: /^[a-zA-Z]+$/,
      required: true,
    },
  },
  createLogIn: {
    email: {
      in: ['body'],
      regex: /^[\w-\.]+@(successive.tech)$/,
      required: true,
      string: true,
    },
    password: {
      in: ['body'],
      required: true,

    },
  },
  dataToUpdate: {
    dataUp: {
    in: ['body'],
    isObject: true,
    required: true,
    },
    originalId: {
      in: ['body'],
      required: true,
      string: true,
      custom(values) {
        console.log('Value', values);
        // throw { error: "Error Occurred", message: "Message" };
      },
    },
  },
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      number: true,
      required: true,
    },
  },
  get: {
    limit: {
      default: 4,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 1,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },
  update: {
    id: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
};
export default validation;
