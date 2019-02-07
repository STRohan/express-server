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
      regex: /^[a-zA-Z]+$/,
      required: true,
    },
    password: {
      in: ['body'],
      required: true,

    },
  },
  dataToUpdate: {
    in: ['body'],
    isObject: true,
    required: true,

    custom(dataToUpdate) { console.log(dataToUpdate); },
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
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 70,
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
