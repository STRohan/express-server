import { error } from 'util';
let date = new Date();

export function errorHandler(err, req, res, all) {

  res.json({
    error: err.error|| "error",
    message: err.message || "wrong or invalid input",
    status: err.status || 500,
    timestamp: date
  });
}
