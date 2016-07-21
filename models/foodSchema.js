var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  allergyInfo: {
    type: String
  },
  sizes: {
    type: Array
  },
  category: {
    type: String
  }
});

module.exports = mongoose.model('food', foodSchema);
