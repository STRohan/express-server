const permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  }
};

function hasPermission(moduleName, role, permissionType) {
  console.log(permissions[moduleName][permissionType].includes(role));
}
hasPermission("getUsers", "head-trainer", "delete");
