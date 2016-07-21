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
  // images: {
  //   type: Array,
  //   required: false
  // },
  allergyInfo: {
    type: String
  },
  sizes: {
    type: Array
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "restaurant"
  },
});

module.exports = mongoose.model('food', foodSchema);
