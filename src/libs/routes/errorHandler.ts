let date = new Date();

export function errorHandler(err, req, res, all) {
  console.log("Error");
  res.json({
    error: "Not Found",
    message: "error",
    status: 500,
    timestamp: date
  });
}
