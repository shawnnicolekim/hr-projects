const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const db = require('../database/index.js')

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/repos', function (req, res) {
  var sortOptions = {
    sort: {
      watchers: "asc",
    },
    limit: 25
  };

  db.Repo.find({}, null, sortOptions)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      console.error(err);
    })
});

app.post('/repos', function (req, res, next) {
  var body = req.body;

  getReposByUsername(body.username)
    .then(response => {
      db.save(response);
      response.sort((a, b) => {
        return a.watchers - b.watchers;
      })
      res.json(response);
    })
    .catch(err => {
      console.error(err, 'Could not get repo or save info to database')
    })

});


