export function notFoundRoute(req, res, next) {


  next({ error: "not found" });
}
