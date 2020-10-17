var models = require('../models');


module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    models.messages.getAll(function(err, results, body) {
      if (err) {
        throw ('Could not get all messages');
      }
      res.json(results);
    });
  },
  // a function which handles posting a message to the database
  post: function (req, res) {
    var params = [ req.body.message, req.body.username, req.body.roomname ];
    models.messages.create(params, function(err, results) {
      if (err) {
        throw ('Could not add message');
      } else {
        res.sendStatus(201);
      }
    });
  }
};
