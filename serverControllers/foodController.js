var mongoose = require('mongoose');
var Food = require('../models/foodSchema');


module.exports = {

  show: function(req, res, next) {
    Food.findById(req.params.id, function(err, foodResponse) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json(foodResponse)
      }
    })
  },


  create: function(req, res, next) {
      var newFood = new Food(req.body);
      newFood.save(function(err, saved) {
        if(err) {
          console.log(err)
        } else {
          res.status(200).json(saved)
        }
      })
  },

  update: function(req, res, next) {
    Food.findByIdAndUpdate(req.body._id, req.body, function(err, foodResponse) {
      console.log(err, foodResponse);

      if(err) {
        // console.log('error:', err)
      } else {
        // console.log('response', foodResponse);
        res.status(200).send(foodResponse);
      }
    })
  },

  destroy: function(req, res, next) {
    Food.findByIdAndRemove(req.params.id, function(err, foodResponse) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).json(foodResponse)
      }
    })
  }

}
