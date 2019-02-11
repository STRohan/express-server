const validationHandler = (config) => (req, res, next) => {
  const keys = Object.keys(config);
  keys.forEach((key) => {
    const items = config[key];
    const values = items.in.map((item) => {
      return req[item][key];
    });
    if (items && items.required) {
      const validationValues = values.filter((element) => element);
      if (validationValues.length !== values.length) errorCommon(`${key} is required`, next);
      else if (items && !items.required) {
      const { skip, limit } = req.query;
      if (items && items.number) {
        if (skip && (isNaN(skip))) errorCommon('Skip as number is required', next);
        if (limit && (isNaN(limit))) errorCommon('Limit as number is required', next);
        if (values[0] === '' || values[0] === undefined) { req.query[key] = items.default; }
      }
    }
      if (items && items.string) {
      const temp = values[0];
      if (typeof temp !== 'string') {
        errorCommon(`${key} as string is required`, next);
      }
    }
      if (items && items.number && (values[0] && isNaN(values[0]))) {
        errorCommon(`${key} as number is required`, next);
      }
      if (items && items.isObject) {
      const temp = values[0];
      if (typeof temp !== 'object') errorCommon(`${key} as object is required`, next);
    }
      if (items && items.regex) {
      const regex1 = RegExp(items.regex);
      if (!regex1.test(values)) errorCommon(`${key} as alpha. is required`, next);
    }
      if (items && items.in) {
      const validateValue = values.filter((item) => item);
      const reqKeys = Object.keys(req[items.in[0]]);
      if (!reqKeys.length) {
        if (!reqKeys.includes(key)) { errorCommon('incorrect request', next); }
      }
    }
      if (items && items.custom) return items.custom(values);
  }});
  next();
};
export default validationHandler;
function  errorCommon(message: any, next) {
  return next({
    error: 'Invalid ',
    message: message || 'Invalid Request',
    status: 406,
  });
}
