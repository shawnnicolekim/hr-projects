const axios = require('axios');
// const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  return axios.get(`https://api.github.com/users/${username}/repos`, {
    headers: {
      'Authorization': process.env.GITHUB_API_TOKEN
    }
  })
  .then(results => {
    var data = results.data;

    var userInfo = data.map(function(repo) {
      var repoInfo = {
        repo_id: repo.id,
        username: repo.owner.login,
        reponame: repo.name,
        watchers: repo.watchers,
        url: repo.html_url
      }
      return repoInfo;
    });
    return userInfo;
  })
  .catch(err => {
    console.log('error in getting repo by username');

    throw err;
  });

}

module.exports.getReposByUsername = getReposByUsername;