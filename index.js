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


//Cart Daniel


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
            if (err) {
                console.log(err)
            } else {
                res.status(200).json(saved)
            }
        })
    })
})

app.put('/api/food/:id', function(req, res, next) {
    Food.findByIdAndUpdate(req.params.id, req.body, function(err, foodResponse) {
        if (err) {
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



//Order Jordan
app.get('/api/order/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, orderResponse) {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json(orderResponse)
        }
    })
})

app.post('/api/order/', function(req, res, next) {
            Order.create(function(err, orderResponse) {
                    var newOrder = new Order(req.body);
                    newOrder.save(function(err, saved) {
                            if (err) {
                                console.log(err)
                            } else {
                                res.status(200).json(saved)
                            }
                        })
                    })
            })

        app.put('/api/order/:id', function(req, res, next) {
            Order.findByIdAndUpdate(req.params.id, req.body, function(err, orderResponse) {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json(orderResponse)
                }
            })
        })

        app.delete('/api/order/:id', function(req, res, next) {
            Order.findByIdAndRemove(req.params.id, function(err, orderResponse) {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json(orderResponse)
                }
            })
        })



        //Restaurant Daniel


        //User Jordan
        // MODEL ENDPOINTS
        app.get('/api/user/:id', function(req, res, next) {
            User.findById(req.params.id, function(err, userResponse) {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json(userResponse)
                }
            })
        })

        app.post('/api/user/', function(req, res, next) {
                User.create(function(err, userResponse) {
                        var newUser = new User(req.body);
                        newUser.save(function(err, saved) {
                                if (err) {
                                    console.log(err)
                                } else {
                                    res.status(200).json(saved)
                                }
                            })
                        })
                })

            app.put('/api/user/:id', function(req, res, next) {
                User.findByIdAndUpdate(req.params.id, req.body, function(err, userResponse) {
                    if (err) {
                        console.log(err)
                    } else {
                        res.status(200).json(userResponse)
                    }
                })
            })

            app.delete('/api/user/:id', function(req, res, next) {
                User.findByIdAndRemove(req.params.id, function(err, userResponse) {
                    if (err) {
                        console.log(err)
                    } else {
                        res.status(200).json(userResponse)
                    }
                })
            })









            //port

            var port = 80; app.listen(port, function() {
                console.log('listening to port', port);
            })
