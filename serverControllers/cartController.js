var mongoose = require('mongoose');
var Cart = require('../models/cartSchema');


module.exports = {

  show: function(req, res, next) {
    console.log("received request")
    Cart.findOne({customer: req.params.user, restaurant: req.params.restauant}).populate("items.item").exec(function(err, cartResponse) {
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
    console.log(req.params.user)
    Cart.findOne({customer: req.params.user, restaurant: req.params.restauant}, function(err, cartResponse) {
      if (err) {
        return console.log(err)
      }
      console.log(cartResponse)
      if(!cartResponse) {
        Cart.create({items: [req.body], customer: req.params.user, restaurant: req.params.restauant})
        .populate("items.item")
        .exec(function(err, newCartResponse) {
          res.status(200).send(newCartResponse)
        })
      } else {
        cartResponse.items.push(req.body);
        cartResponse.save(function(err, updatedCart) {
          if (err) {
            console.log(err)
          }
          updatedCart.populate('items.item', function(err, populatedCart) {
            if (err) {
              console.log(err)
            }
            else {
              res.status(200).send(populatedCart);
            }
          })

        });
      }
    })
  },
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
