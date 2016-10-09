// app/models/employee.js
// load the things we need
var mongoose = require('mongoose');


// define the schema for our empleadoSchema model
var softwareSchema = mongoose.Schema({

  name:    {
    type    : String,
    require : true
  },
  description:    {
    type    : String,
    require : true
  },
  version:    {
    type    : String,
    require : true
  }

});

// create the model for users and expose it to our app

//module.exports = mongoose.model('software','nodejscourses');
module.exports = mongoose.model('software', softwareSchema);

