var db = require('../db');

module.exports = {
  // gets all users from database
  getAll: function (callback) {
    var queryStr = 'SELECT * FROM users';
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },
  // creates a new user to the database
  create: function (params, callback) {
    var queryStr = 'INSERT INTO users(username) values (?)';
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }
};
