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

  // update: function(req, res, next) {
  //   Cart.find({user: req.params.user, restauant: req.params.restauant}, function(err, cartResponse) {
  //     if(err) {
  //       Cart.create({item: req.body, user: req.params.user, restauant: req.params.restauant}, function(err, newCartResponse) {
  //         res.status(200).send(newCartResponse)
  //       })
  //     } else {
  //       cartResponse.items.push(req.body);
  //       cartResponse.save();
  //       res.status(200).send(cartResponse);
  //     }
  //   })
  // },
  //
  // destroy: function(req, res, next) {
  //   Cart.find({user: req.params.user, restauant: req.params.restauant} function(err, cartResponse) {
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       res.status(200).json(cartResponse)
  //     }
  //   })
  // }

}
