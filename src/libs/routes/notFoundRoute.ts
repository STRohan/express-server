export function notFoundRoute(req, res, next) {
  console.log("Server Not Found");

  next({ error: "not found" });
}
