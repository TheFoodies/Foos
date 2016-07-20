var mongoose = require('mongoose');
var Restaurant = require('../models/restaurantSchema');


module.exports = {

  show: function(req, res, next) {
    Restaurant.findById(req.params.id, function(err, restaurantResponse) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json(restaurantResponse)
      }
    })
  },


  create: function(req, res, next) {
    Restaurant.create(function(err, restaurantResponse) {
      var newRestaurant = new Restaurant(req.body);
      newRestaurant.save(function(err, saved) {
        if(err) {
          console.log(err)
        } else {
          res.status(200).json(saved)
        }
      })
    })
  },

  update: function(req, res, next) {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, function(err, restaurantResponse) {
      if(err) {
        console.log(err)
      } else {
        res.status(200).json(restaurantResponse)
      }
    })
  },

  destroy: function(req, res, next) {
    Restaurant.findByIdAndRemove(req.params.id, function(err, restaurantResponse) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json(restaurantResponse)
      }
    })
  }

}
