const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_id: {
    type: Number,
    unique: true
  },
  username: String,
  reponame: String,
  watchers: Number,
  url: String
});

// this compiles our repoSchema into a Model called Repo.
let Repo = mongoose.model('Repo', repoSchema);

let save = (userInfo) => {
  // This function should save a repo or repos to
  // the MongoDB

  Repo.insertMany(userInfo, {'ordered': false})
    .then((data) => {
      console.log('Data was inserted!');
    })
    .catch(err => {
      if (err.code !== 11000) {
        console.error(err);
      }
      console.log('Data was inserted. Duplicates were not included.');
      return;
    })
}

module.exports = {
  save: save,
  Repo: Repo
}

/*
function(err, results) {
    if (results.hasWriteErrors()) {
      if (results.getWriteErrors().some(error => error.code !== 11000)) {
        throw err;
      }
      resolve(results);
    }
  })
*/