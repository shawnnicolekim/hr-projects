const express = require('express');
const app = express();
const port = 3000;
const headers = require('./cors');

var randomMovies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

app.get('/api/movies', (req, res) => {
  res.set(headers);
  res.send(JSON.stringify(randomMovies));
})

app.use('/', (req, res) => {
  res.set(headers);
  res.send('Hello World');
})

app.listen(port, () => {
  console.log(`This is listening to http://localhost:${port}`)
})

module.exports = app;