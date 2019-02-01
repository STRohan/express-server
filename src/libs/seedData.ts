import UserRepository from "../repositories/user/UserRepository";
export default function seed() {
  const repository = new UserRepository();
  try {
    repository
      .create({
        id: "9",
        name: "kyomi",
        name2: "ram"
      })
      .then(result => {
        console.log("User Created ", result);
      })
      .catch(err => {
        console.log("ERROR");
      });

    repository
      .update({ name2: "ram" }, { name2: "__kyomi__" })
      .then(result => {
        console.log("User Updated ", result);
      })
      .catch(err => {
        console.log("ERROR");
      });

    repository
      .delete({})
      .then(result => {
        console.log("Number of User Deleted ", result);
      })
      .catch(err => {
        console.log("ERROR");
      });

  } catch (err) {
    console.log("The Error is ", err);
  }
}
