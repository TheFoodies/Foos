var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  menu: {
    type: Array,
    ref: Food
  },
  location: {
    type: String,
    required: true
  },
  orders: {
    type: Array,
    ref: Order
  }
});

module.exports = mongoose.model('restaurant', restaurantSchema);
