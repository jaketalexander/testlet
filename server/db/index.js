const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/splitwise', { useNewUrlParser: true, useUnifiedTopology: true });
const { Schema } = mongoose;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('mongodb connected');
});

const splitwiseSchema = new Schema({
  word: String,
  definition: String,
});

const Splitwise = mongoose.model('splitwise', splitwiseSchema);

module.exports = Splitwise;
