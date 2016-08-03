var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  items : [{
    item: {
      type: Schema.Types.ObjectId,
      ref: "food"
    },
    specialInstructions: {
      type: String
    },
    quantity: {
      type: Number,
      min: 1
    },
  }],
  customer: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "restaurant"
  },
  completed: {
    type: Boolean,
    default: false
  },
  pickup: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('order', orderSchema);
