var mongoose = require('mongoose');
var Cart = require('../models/cartSchema');


module.exports = {

  show: function(req, res, next) {
    Cart.findById(req.params.id, function(err, cartResponse) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json(cartResponse)
      }
    })
  },


  create: function(req, res, next) {
    Cart.create(function(err, cartResponse) {
      var newCart = new Cart(req.body);
      newCart.save(function(err, saved) {
        if(err) {
          console.log(err)
        } else {
          res.status(200).json(saved)
        }
      })
    })
  },

  update: function(req, res, next) {
    Cart.findByIdAndUpdate(req.params.id, req.body, function(err, cartResponse) {
      if(err) {
        console.log(err)
      } else {
        res.status(200).json(cartResponse)
      }
    })
  },

  destroy: function(req, res, next) {
    Cart.findByIdAndRemove(req.params.id, function(err, cartResponse) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json(cartResponse)
      }
    })
  }

}
