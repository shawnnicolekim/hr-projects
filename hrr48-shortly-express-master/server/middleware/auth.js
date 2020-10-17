const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // check for session cookie
  // if it exists
  // load session from database
  // it it doesn't exist
  // make a new session

  // Promise.resolve just creates a Promise chain with the input value
  Promise.resolve(req.cookies.shortlyid)
    .then((hash) => {
      if (!hash) {
        throw hash;
      }
      return models.Sessions.get({hash});
    })
    .then((session) => {
      if (!session) {
        throw session;
      }
      return session;
    })
    .catch(() => {
      // make a new session if there are any errors from the .then before
      return models.Sessions.create()
        .then(result => {
          return models.Sessions.get({id: result.insertId});
        })
        .then(session => {
          res.cookie('shortlyid', session.hash);
          return session;
        });
    })
    .then((session) => {
      req.session = session;
      next();
    });

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

module.exports.verifySession = (req, res, next) => {
  if (!models.Sessions.isLoggedIn(req.session)) {
    res.redirect('/login');
  } else {
    next();
  }
};