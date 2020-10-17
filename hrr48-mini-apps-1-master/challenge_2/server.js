const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
})

app.use(express.static('client'));
app.use(express.json());

// POST method
app.post('/', function(req, res) {
  new Promise((resolve, reject) => {
    var input = req.body;
    // console.log('REQUEST BODY:', req.body);

    // keys of given object
    var keys = Object.keys(input);
    // console.log('keys: ', keys);
    // get the column names from the keys except the last key
    var columnNames = keys.slice(0, keys.length - 1);
    // console.log('columnNames: ', columnNames);
    // this holds the key name for the next row "children"
    var children = keys[keys.length - 1];
    // console.log('nextRow: ', nextRow);

    var csvTemplate = 'data:text/csv;charset=utf-8,';
    // create the header row
    var csv = columnNames.join(',') + '\n';

    // check the first one, then child, then child, until no more children, then check siblings
    var checkChildren = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        getRow(arr[i]);
      }
    }

    var getRow = function(obj) {
      var row = [];
      for (var key in obj) {
        if (key !== children) {
          row.push(obj[key])
        } else {
          csv += row.join(',') + '\n';
          if (obj[key].length !== 0) {
            checkChildren(obj[key]);
          }
        }
      }
    }

    getRow(input);

    resolve(csv);
  })
    .then(result => {
      console.log('I get to the then');
      res.send(result);
    })
    .catch(err => {
      console.error('There is an error!', err);
    })
});

module.exports = app;