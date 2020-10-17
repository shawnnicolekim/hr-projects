/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 *
 - getGitHubProfileAsync(username): this function will JSON.parse(body) for us, gives us profile on body, returns JSON string for user's profile

 - pluckFirstLineFromFileAsync(filePath): gets first line from file

 - getStatusCodeAsync(url): This function should retrieve the status code of a GET request to `url`, returns username

 */

var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);
var Promfic = require('./promisification.js');
var PromCon = require('./promiseConstructor.js');

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return PromCon.pluckFirstLineFromFileAsync(readFilePath)
    .then(Promfic.getGitHubProfileAsync)
    .then(
      function(body) {
        return fs.writeFileAsync(writeFilePath, JSON.stringify(body));
      }
    )
    .catch(
      function(error) {
        console.log('Error', error);
      }
    );
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
