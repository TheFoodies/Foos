var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
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
  }]
  customer: {
    type: Schema.Types.ObjectId,
    ref: "user"}
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "restaurant"
  },
});

module.exports = mongoose.model('cart', cartSchema);
