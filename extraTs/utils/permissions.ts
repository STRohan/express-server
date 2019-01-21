import { permissions } from "../constants";

export function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string
): void {
  if (
    permissions[moduleName]["all" as string].includes(role) ||
    permissions[moduleName][permissionType].includes(role)
  )
    return console.log("True");
  else return console.log("False");
}
