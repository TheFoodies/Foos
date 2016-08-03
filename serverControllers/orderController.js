var mongoose = require('mongoose');
var Order = require('../models/orderSchema');


module.exports = {

  show: function(req, res, next) {
    console.log("got the request for orders")
    Order.find({restaurant: req.user._id, pickup:false}).populate("items.item").populate("customer", "firstName lastName").exec(function(err, orderResponse) {
      if (err) {
        console.log(err)
      } else {
        console.log(orderResponse)
        res.status(200).json(orderResponse)
      }
    })
  },

  find: function(req, res, next) {
    console.log("got the success order request")
    Order.findById(req.params.orderID).populate("items.item").populate("restaurant").exec(function(err, orderResponse) {
      if (err) {
        console.log(err)
      } else {
        console.log(orderResponse)
        res.status(200).json(orderResponse)
      }
    })
  },

  create: function(req, res, next) {
      var newOrder = new Order(req.body);
      newOrder.save(function(err, saved) {
        if(err) {
          console.log(err)
        } else {
          res.status(200).json(saved)
        }
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

  completed: function(req, res, next) {
    Order.findByIdAndUpdate(req.params.id, req.body, function(err, orderResponse) {
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
