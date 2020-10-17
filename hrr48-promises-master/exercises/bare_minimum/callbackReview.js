/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
// var firstline = require('firstline');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function (err, content) {
    if (err) {
      callback(err, content);
    } else {
      var line = content.split(/\r?\n/);
      callback(null, line[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, function(err, response, body) {
    if (err) { return callback(err, null); }
    callback(null, response.statusCode);
  });
};


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
