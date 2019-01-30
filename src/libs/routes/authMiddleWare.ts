import * as jwt from "jsonwebtoken";
import { hasPermission } from "./hasPermissions";
export default (module, permissionstype) => (req, res, next) => {
  const Token = req.header("Authorization");
  jwt.verify(Token, process.env.KEY, function(err, result) {
    if (err)
      return next({
        error: "Unauthorized",
        message: "Access Denied",
        status: 401
      });
    if (!hasPermission(module, result.role, permissionstype))
      next({
        error: "Unauthorized Access",
        message: "Permission Not Granted",
        status: 401
      });
    req.user = result;
    next();
  });
};
