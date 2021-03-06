var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  restaurantImage: {
    type: String
  },
  category: {
    type: String
  },
  menu: [{
    name: {
      type: String
    },
    items: [{
      type: Schema.Types.ObjectId,
      ref: "food"
    }]
  }],
  location: {
    lat: {type: Number},
    long: {type: Number}
  },
  orders: {
    type: Array,
    ref: "Order",
    type: String,
    required: false
  },
  yelpId: {
    type: String,
  },
});

restaurantSchema.pre('save', function(next) {
	var restaurant = this;
	if (!restaurant.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(restaurant.password, salt);
  restaurant.password = hash;
  return next(null, restaurant);
});

restaurantSchema.methods.verifyPassword = function(reqBodyPassword) {
  var restaurant = this;
  return bcrypt.compareSync(reqBodyPassword, restaurant.password);
};

module.exports = mongoose.model('restaurant', restaurantSchema);
