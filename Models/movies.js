var mongoose = require('mongoose');


///Schema
var moviesSchema = mongoose.Schema({
    title: String,
    overview: String,
    poster_path: String,
    idMovieDB: Number

  });

  //Modèle
var MoviesModel = mongoose.model('movies', moviesSchema);

module.exports = MoviesModel;