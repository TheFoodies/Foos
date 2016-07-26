var mongoose = require('mongoose');
var Order = require('../models/orderSchema');


module.exports = {

  show: function(req, res, next) {
    Order.find({restaurant: req.user._id}
      .populate("food")
      .exec(function(err, orderResponse) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json(orderResponse)
      }
    })
  )
  },

  create: function(req, res, next) {
    Order.create(function(err, orderResponse) {
      var newOrder = new Order(req.body);
      newOrder.save(function(err, saved) {
        if(err) {
          console.log(err)
        } else {
          res.status(200).json(saved)
        }
      })
    })
  },

  update: function(req, res, next) {
    Order.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, orderResponse) {
      if(err) {
        console.log(err)
      } else {
        res.status(200).json(orderResponse)
      }
    })
  },

  destroy: function(req, res, next) {
    Order.findByIdAndRemove(req.params.id, function(err, orderResponse) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json(orderResponse)
      }
    })
  }

}
