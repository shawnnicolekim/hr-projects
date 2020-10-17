var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });
// creates a connection to the database
// arguments: database, username, password, options(dialect: The dialect of the database you are connecting to(sqlite), storage: Only used by sqlite.)
// var db = require('./db.test.sqlite');

var User = sequelize.define('User', {
  username: Sequelize.STRING
});
// User is a Model
// arguments: modelName(string), attributes(each attribute is a column: sequelize.string = char(255));


/*  Create a '/users' route that responds to
    a GET request with all users in the database */

app.get('/users', function(req, res) {
  User.findAll({})
    .then(response => {
      res.json(response[0].dataValues);
    })
    .catch(err => {
      console.error(err);
    })

})

module.exports = {
  app: app,
  User: User
};
