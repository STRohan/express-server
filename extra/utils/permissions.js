import { permissions } from "../constants";

export function hasPermission(moduleName, role, permissionType) {
  if (
    permissions[moduleName]["all"].includes(role) ||
    permissions[moduleName][permissionType].includes(role)
  ){
    console.log("True");
    return ;
  }  
    else 
{
  console.log("False");
  return;
}}

