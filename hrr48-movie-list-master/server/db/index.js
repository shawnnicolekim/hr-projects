var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'Rootuser1!',
  database: 'movieDirectory'
});

connection.connect();

module.exports = connection;