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
    category: {
      type: String
    },
    items: {
      type: Array,
      ref: "Food"
    }
  },
  location: {
    type: String,
    required: true
  },
  orders: {
    type: Array,
    ref: "Order"
  },
  yelpId: {
    type: String,
  }
});

module.exports = mongoose.model('restaurant', restaurantSchema);
