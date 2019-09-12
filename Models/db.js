var mongoose = require('mongoose');

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
}

mongoose.connect('mongodb+srv://alex_aguilera5:Realmadrid5@cluster0-qnurn.mongodb.net/mymovizapp',
  options,
  function(err) {
    console.log("base ok");
  }
);


module.exports = mongoose;