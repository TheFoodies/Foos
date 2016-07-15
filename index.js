var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');

//models

var Cart = require('./models/cartSchema');
var Food = require('./models/foodSchema');
var Order = require('./models/orderSchema');
var Restaurant = require('./models/restaurantSchema');
var User = require('./models/userSchema');


//mongoose setup

mongoose.connect("mongodb://localhost/foos");


//express setup

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

//***************Todo Set Up LocalAuth Here*************************






//**************Endpoints***************


//Cart
app.get('/api/cart/:id', function(req, res, next) {
  Cart.findById(req.params.id, function(err, cartResponse) {
    if (err) {
      console.log(err)
    } else {
      res.status(200).json(cartResponse)
    }
  })
})

app.post('/api/cart/', function(req, res, next) {
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
})

app.put('/api/cart/:id', function(req, res, next) {
  Cart.findByIdAndUpdate(req.params.id, req.body, function(err, cartResponse) {
    if(err) {
      console.log(err)
    } else {
      res.status(200).json(cartResponse)
    }
  })
})

app.delete('/api/cart/:id', function(req, res, next) {
  Cart.findByIdAndRemove(req.params.id, function(err, cartResponse) {
    if (err) {
      console.log(err)
    } else {
      res.status(200).json(cartResponse)
    }
  })
})

//Food
app.get('/api/food/:id', function(req, res, next) {
  Food.findById(req.params.id, function(err, foodResponse) {
    if (err) {
      console.log(err)
    } else {
      res.status(200).json(foodResponse)
    }
  })
})

app.post('/api/food/', function(req, res, next) {
  Food.create(function(err, foodResponse) {
    var newFood = new Food(req.body);
    newFood.save(function(err, saved) {
      if(err) {
        console.log(err)
      } else {
        res.status(200).json(saved)
      }
    })
  })
})

app.put('/api/food/:id', function(req, res, next) {
  Food.findByIdAndUpdate(req.params.id, req.body, function(err, foodResponse) {
    if(err) {
      console.log(err)
    } else {
      res.status(200).json(foodResponse)
    }
  })
})

app.delete('/api/food/:id', function(req, res, next) {
  Food.findByIdAndRemove(req.params.id, function(err, foodResponse) {
    if (err) {
      console.log(err)
    } else {
      res.status(200).json(foodResponse)
    }
  })
})

//Order


//Restaurant
app.get('/api/restaurant/:id', function(req, res, next) {
  Restaurant.findById(req.params.id, function(err, restaurantResponse) {
    if (err) {
      console.log(err)
    } else {
      res.status(200).json(restaurantResponse)
    }
  })
})

app.post('/api/restaurant/', function(req, res, next) {
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
})

app.put('/api/restaurant/:id', function(req, res, next) {
  Restaurant.findByIdAndUpdate(req.params.id, req.body, function(err, restaurantResponse) {
    if(err) {
      console.log(err)
    } else {
      res.status(200).json(restaurantResponse)
    }
  })
})

app.delete('/api/restaurant/:id', function(req, res, next) {
  Restaurant.findByIdAndRemove(req.params.id, function(err, restaurantResponse) {
    if (err) {
      console.log(err)
    } else {
      res.status(200).json(restaurantResponse)
    }
  })
})

//User







//port

var port = 80;
app.listen(port, function() {
  console.log('listening to port',port);
})
