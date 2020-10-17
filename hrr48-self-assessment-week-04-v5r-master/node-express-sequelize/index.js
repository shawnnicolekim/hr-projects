var app = require('./server').app;
var User = require('./server').User;
var port = 3000;

// {force: true} drops table if exists before creating new one
User.sync({ force: true })
  .then(function () {
    console.log('Users table created');
    // creates a new instance table w/ username column
    return User.create({ username: 'zlester' });
  })
  .then(function() {
    console.log('Seeded User table');
    app.listen(port, function() {
      console.log('node-express-sequelize listening on ' + port);
    });
  });
