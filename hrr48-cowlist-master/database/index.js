var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'Rootuser1!',
  database: 'farm'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database');
  } else {
    console.log('Database connection successful');
  }
});

module.exports = connection;