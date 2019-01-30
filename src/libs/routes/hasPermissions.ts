import { permissions } from "./constants";

export function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string
): boolean {
  return (
    permissions[moduleName] &&
    (permissions[moduleName]["all" as string].includes(role) ||
      permissions[moduleName][permissionType].includes(role))
  );
}
