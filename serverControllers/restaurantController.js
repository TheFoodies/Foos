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
      var newRestaurant = new Restaurant(req.body);
      newRestaurant.save(function(err, saved) {
        if(err) {
          console.log(err)
        } else {
          res.status(200).json(saved)
        }
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
  },

  register: function(req, res, next) {
    Restaurant.create(req.body, function(err, result) {
      if(err) return res.status(500).send(err);
      newRestaurant = result.toObject();
      delete newRestaurant.password;
      res.status(200).json(newRestaurant);
    });
  },

  me: function(req, res, next) {
    console.log(req.user);
    if (!req.user) return res.status(401).send('current user not defined');
    delete req.user.password;
    return res.status(200).json(req.user);
  },

  update: function(req, res, next) {
    Restaurant.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
      if (err) next(err);
      res.status(200).send('user updated');
    });
  }

}
