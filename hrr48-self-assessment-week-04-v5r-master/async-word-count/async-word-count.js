var fs = require('fs');
var path = require('path');

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  getWordCount(filePathOne, function(err1, results1) {
    if (err1) {
      console.error(err1);
    } else {
      getWordCount(filePathTwo, function(err2, results2) {
        if (err2) {
          console.error(err2);
        } else {
          var totalCount = results1 + results2;
          callback(null, totalCount);
        }
      });
    }
  });
};

module.exports = getTotalWordCount;

/*
Test:
getTotalWordCount('./async-word-count/files/fileOne.txt', './async-word-count/files/fileTwo.txt', function(err, count) {
  if (err) {
    console.log('bad count');
  } else {
    console.log(count);
  }
})
*/

