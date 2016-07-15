var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  items : {
    type: String,
    ref: Cart
  },
  quantity: {
    type: Number,
    min: 1
  }
});

module.exports = mongoose.model('order', orderSchema);
