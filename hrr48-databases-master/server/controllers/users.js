var models = require('../models');

module.exports = {
  // handles get
  get: function (req, res) {
    models.users.getALL(function(err, results) {
      if (err) {
        throw ('Could not get all users');
      } else {
        res.json(results);
      }
    });
  },
  // handles post
  post: function (req, res) {
    var params = [ req.body.username ];
    models.users.create(params, function(err, results) {
      if (err) {
        throw ('Could not add user');
      } else {
        res.sendStatus(201);
      }
    });
  }
};
