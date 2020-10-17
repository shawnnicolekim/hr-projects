var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    // create sql variable (sql query)
    var info = 'SELECT messages.id, messages.message, messages.roomname, users.username FROM messages LEFT OUTER JOIN users on (messages.userid=users.id) ORDER BY messages.id DESC';

    db.query(info, (err, results) => {
      callback(err, results);
    });
  },
  // a function which can be used to insert a message into the database
  create: function (params, callback) {
    var info = 'INSERT INTO messages(message, userid, roomname) VALUES (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)';
    db.query(info, params, (err, results) => {
      callback(err, results);
    });
  }
};
