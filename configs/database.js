const mongoose = require('mongoose');
const env = require('')


mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose;
db.url = 'mongodb://user:password@0.0.0.0:27017/locadoradb?Source=admin'

module.exports = db;