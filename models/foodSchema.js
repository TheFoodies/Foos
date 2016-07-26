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
  size: {
    small: {type: Boolean, default: false},
    medium: {type: Boolean, default: false},
    large: {type: Boolean, default: false}
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "restaurant"
  },
});

module.exports = mongoose.model('food', foodSchema);
