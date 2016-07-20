var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  items : {
    item: {
      type: String,
      ref: "Cart"
    },
    specialInstructions: String
  },
  quantity: {
    type: Number,
    min: 1
  },
  time: {
    type: String
  }
});

module.exports = mongoose.model('order', orderSchema);
