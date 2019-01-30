const validation = {
  create: {
    id: {
      required: true,
      string: true,

      in: ["body"],
      custom: function(values) {
        console.log("Value", values);
        //throw { error: "Error Occurred", message: "Message" };
      }
    },
    name: {
      required: true,
      regex: /^[a-zA-Z]+$/,
      in: ["body"],
      errorMessage: "Name is required"
    }
  },
  delete: {
    id: {
      required: true,
      number: true,
      errorMessage: "Id is required",
      in: ["params"]
    }
  },
  get: {
    skip: {
      required: false,
      default: 70,
      number: true,
      in: ["query"],
      errorMessage: "Skip is invalid"
    },
    limit: {
      required: false,
      default: 10,
      number: true,
      in: ["query"],
      //isInt: true,
      errorMessage: "Limit is invalid"
    }
  },

  update: {
    id: {
      required: true,
      string: true,
      in: ["body"]
    },
    dataToUpdate: {
      in: ["body"],
      required: true,
      isObject: true,
      custom: function(dataToUpdate) {}
    }
  }
};
export default validation;
