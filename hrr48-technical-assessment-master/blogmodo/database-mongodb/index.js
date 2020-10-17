const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/blogmodo';

const db = mongoose.connect(mongoUri);

module.exports = db;
