var mongoose = require('mongoose');
var Restaurant = require('../models/restaurantSchema');


module.exports = {

  show: function(req, res, next) {
    Restaurant.findById(req.params.id).populate('menu.items').exec( function(err, restaurantResponse) {
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
    console.log('req.body: ',req.body);
    Restaurant.findByIdAndUpdate(req.user._id, req.body, function(err, restaurantResponse) {
      console.log('response: ', restaurantResponse);
      if(err) {
        console.log(err)
        res.status(500).send(err);
      } else {
        res.status(200).send(restaurantResponse)
      }
    })
  },

  destroy: function(req, res, next) {
    Restaurant.findByIdAndRemove(req.params.id, function(err, restaurantResponse) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).send(restaurantResponse)
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
    Restaurant.findById(req.user._id).populate('menu.items').exec(function(err, restaurantResponse) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json(restaurantResponse)
      }
    })
  },

  addToMenu: function(req, res, next) {
    var restaurant = req.user;
    for (var i = 0; i < restaurant.menu.length; i++) {
      if (req.params.category === restaurant.menu[i].name) {
        restaurant.menu[i].items.push(req.body._id);
      }
    }
    console.log(restaurant)
    restaurant.save(function(err, restaurantResponse) {
      console.log('response: ', restaurantResponse);
      if(err) {
        console.log(err)
        res.status(500).send(err);
      } else {
        res.status(200).send(restaurantResponse)
      }
    })
  },

  addCategory: function(req, res, next) {
    var restaurant = req.user;
    var flag = false;
    for (var i = 0; i < restaurant.menu.length; i++) {
      if (req.body.name === restaurant.menu[i].name) {
        flag = true;
      }
    }
    if (!flag) restaurant.menu.push(req.body);
    console.log(restaurant);
    restaurant.save(function(err, restaurantResponse) {
      if(err) {
        console.log(err)
        res.status(500).send(err);
      } else {
        res.status(200).send(restaurantResponse)
      }
    })
  },

  getAllRestaurantInfo: function(req, res, next){
    Restaurant.find({}, function(err, response){
      if(err) {
        console.log(err)
        res.status(500).send(err);
      } else {
        res.status(200).send(response)
      }
    })
  }

  // update: function(req, res, next) {
  //   Restaurant.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
  //     if (err) next(err);
  //     res.status(200).send('user updated');
  //   });
  // }

}
