const date = new Date();
export function errorHandler(err, req, res, all) {
  res.json({
    error: err.error || 'Error',
    message: err.message || 'Wrong or Invalid Input',
    status: err.status || 400,
    timestamp: date,
  });
}
