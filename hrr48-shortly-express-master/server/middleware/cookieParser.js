const parseCookies = (req, res, next) => {
  var cookieString = req.get('Cookie');

  // turn an array of string into key value pairs
  var parsed = cookieString.split('; ').reduce((cookies, cookie) => {
    if (cookie) {
      var parts = cookie.split('=');
      cookies[parts[0]] = parts[1];
    }
    return cookies;
  }, {});

  req.cookies = parsed;

  next();
};

module.exports = parseCookies;