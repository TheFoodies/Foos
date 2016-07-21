var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');

//models

var Cart = require('./models/cartSchema');
var Food = require('./models/foodSchema');
var Order = require('./models/orderSchema');
var Restaurant = require('./models/restaurantSchema');
var User = require('./models/userSchema');

//controllers

var cartController = require('./serverControllers/cartController');
var foodController = require('./serverControllers/foodController');
// var orderController = require('./serverControllers/orderController');
var restaurantController = require('./serverControllers/restaurantController');
var userController = require('./serverControllers/userController');

//mongoose setup

mongoose.connect("mongodb://localhost/foos");

//express setup

//***************Local Auth Requires****************************
var config = require('./config');

//*************Local Auth Controller****************************
var UserCtrl = require('./serverControllers/userController');

//*************Local Auth Service*******************************
var passport = require('./serverControllers/passportController');

//*************Local Auth Policy********************************
var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};
//*****************Local Auth Requires End**********************

var app = express();
app.use(bodyParser.json());
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));
app.use(cors());
app.use(express.static('public'));

//***********Local Auth*************************
app.use(passport.initialize());
app.use(passport.session());

//*************Local Auth Endpoints***********
app.post('/users', UserCtrl.register);
app.get('/me', isAuthed, UserCtrl.me);
app.put('/users/:_id', isAuthed, UserCtrl.update);

app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));

app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});

//**************Endpoints***************

//Cart
app.get('/api/cart/:id', cartController.show)

app.post('/api/cart/:id', cartController.create)

app.put('/api/cart/:id', cartController.update)

app.delete('/api/cart/:id', cartController.destroy)

//Food
app.get('/api/food/:id', foodController.show)

app.post('/api/food/', foodController.create)

app.put('/api/food/:id', foodController.update)

app.delete('/api/food/:id', foodController.destroy)

//Order


//Restaurant
app.get('/api/restaurant/:id', restaurantController.show)

app.post('/api/restaurant/', restaurantController.create)

app.put('/api/restaurant/:id', restaurantController.update)

app.delete('/api/restaurant/:id', restaurantController.destroy)

//User







//port

var port = 3000;
app.listen(port, function() {
  console.log('listening to port',port);
})
