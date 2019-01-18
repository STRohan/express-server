const getUsers = "getUsers",
  headTrainer = "head-trainer",
  trainee = "trainee",
  trainer = "trainer";
const permissions = {
  getUsers: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};

function hasPermission(moduleName, role, permissionType) {
  if (
    permissions[moduleName]['all'].includes(role) ||
    permissions[moduleName][permissionType].includes(role)
  )
    return "True";
  else return "False";
}
console.log(hasPermission("getUsers", "head-trainer", "delete"));
