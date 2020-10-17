const express = require('express');
const app = express();

const db = require('../database/index.js');
const helper = require('../database/dataHelpers.js');

// set port and have server listen
let port = 3000;
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());
app.use(express.static(__dirname + '/../dist'));
app.use(express.urlencoded({ extended: true }));

// GET request
app.get('/api/cows', function(req, res) {
  // get array of all cow data
  db.query('SELECT * FROM cows', function(err, result) {
    if (err) {
      console.error('Could not pull cow data: ', err);
    }
    res.json(result);
  })
});

// POST request
app.post('/api/cows', function(req, res) {
  var body = req.body;
  helper.save(body)
    .then(response => {
      if (response === 'ER_DUP_ENTRY') {
        // May have to change the response
        res.send('Duplicate! Cannot add the same names.');
      } else {
        console.log(`Successfully added ${response} cow into the table`);
        res.json(body);
      }
    })
    .catch(err => {
      console.error('Could not add your cow :(');
    })
})

// PUT request
app.put('/api/cows/:id', function(req, res) {
  var cowId = req.params.id;
  var body = req.body;

  helper.update(body, cowId)
    .then(response => {
      console.log(`Successfully updated ${response} cow in the table`);
      res.json(body);
    })
    .catch(err => {
      console.error('Could not update this cow :(');
    })
})

// DELETE request
app.delete('/api/cows/:id', function(req, res) {
  var cowId = req.params.id;

  helper.deleteCow(cowId)
    .then(response => {
      console.log(`Successfully deleted ${response[0]} from the table`);
      res.json(response[0]);
    })
    .catch(err => {
      console.error('Could not delete this cow :(');
    })
})