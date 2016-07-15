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

//controllers

var cartController = require('./serverControllers/cartController');
var foodController = require('./serverControllers/foodController');
// var orderController = require('./serverControllers/orderController');
var restaurantController = require('./serverControllers/restaurantController');
// var userController = require('./serverControllers/userController');

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
app.get('/api/cart/:id', cartController.show)

app.post('/api/cart/', cartController.create)

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

var port = 80;
app.listen(port, function() {
  console.log('listening to port',port);
})
