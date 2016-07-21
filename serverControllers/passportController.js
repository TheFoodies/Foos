var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/userSchema');
var Restaurant = require('../models/restaurantSchema');


passport.use('user', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, done) {
  User.findOne({ email: email })
  .exec(function(err, user) {
    if(err) done(err);
    if(!user) return done(null, false);
    if(user.verifyPassword(password)) return done(null, user);
    return done(null, false);
  });
}));

passport.use('restaurant', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function(username, password, done) {
  Restaurant.findOne({ username: username })
  .exec(function(err, restaurant) {
    console.log(restaurant);
    if(err) done(err);
    if(!restaurant) return done(null, false);
    if(restaurant.verifyPassword(password)) return done(null, restaurant);
    return done(null, false);
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(_id, done) {
  User.findById(_id, function(err, user) {
    if (!user) {
      Restaurant.findById(_id, function (err, restaurant) {
        done(err, restaurant)
      })
    }
    else {
      done(err, user);
    }
  });
});

module.exports = passport;
