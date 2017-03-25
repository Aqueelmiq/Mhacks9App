'use strict'
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean2', function (err) {
  if(err) {
    console.log("Fail");
  }
  else {
    console.log("Connected");
  }
});
