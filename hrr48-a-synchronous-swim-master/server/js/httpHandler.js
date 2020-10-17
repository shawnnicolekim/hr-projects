const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const http = require('http');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////
// don't ever touch lines 11-15
let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

// depending on req.method, do something
module.exports.router = (req, res, next = () => {}) => {
  // console.log('Serving request type ' + req.method + ' for url ' + req.url);

    // if error found on req, throw error
    req.on('error', (err) => {
      console.error(err);
      res.writeHead(400, headers);
      res.end();
    });

    // if error found on res, throw error
    res.on('error', (err) => {
      console.error(err);
    });

    if (req.method === 'OPTIONS' && req.url === '/') {
      res.writeHead(200, headers);
      res.end();
      next();
    }

    // if request is GET on base url, do this:
    if (req.method === 'GET') {
      if (req.url === '/') {
        res.writeHead(200, headers);
        res.end(messageQueue.dequeue());
      } else if (req.url === '/background.jpg') {
        fs.readFile(module.exports.backgroundImageFile, (err, data) => {
          if (err) {
            res.writeHead(404, headers);
          } else {
            res.writeHead(200, headers);
            res.write(data, 'binary');
          }
          res.end();
          next();
        });
      }
    }

    if (req.method === 'POST' && req.url === '/background.jpg') {
      var fileData = Buffer.alloc(0);

      req.on('data', (chunk) => {
        fileData = Buffer.concat([fileData, chunk]);
      });

      req.on('end', () => {
        var file = multipart.getFile(fileData);
        fs.writeFile(module.exports.backgroundImageFile, file.data, (err) => {
          res.writeHead(err ? 400 : 201, headers);
          res.end();
          next();
        })
      })
    }
};

/*
// makes sense for images later down the road:
      var body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
        // potential line instead of line 50: messages.enqueue(chunk);
      })
      req.on('end', () => {
        body = Buffer.concat(body).toString();
        res.end(body);
      });
      res.writeHead(200, headers);
    }

    // random command function
    let randomNumber = function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    };

    let randomKey = randomNumber(1, 4);

    let commands = {
      '1': 'up',
      '2': 'down',
      '3': 'left',
      '4:': 'right'
    };

    let randomCommand = commands[randomKey];

*/




