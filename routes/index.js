var express = require('express');
var router = express.Router();
var request = require('request');
var MoviesModel = require('../models/movies')

/* GET home. */
router.get('/', function(req, res, next) {
  res.send('Welcome to our myMovies backend!');
});

/* GET movies. */
router.get('/movies', function(req, res, next) {
  request("https://api.themoviedb.org/3/discover/movie?api_key=15322da9c8b22e5a5253028075983b8f&language=fr-FR&region=FR&include_image_language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1", function(error, response, body) {
    var body= JSON.parse(body);
    res.json({ result: true, movies: body.results });
  })
});

router.get('/mymovies', function(req, res, next) {
// Here, we want to find every movies that we have in our collection movies on MongoDB
  MoviesModel.find(function(error, data) {
  res.json({ result: true, data });
  console.log("ICI_______>", data);
});
});


router.post('/mymovies', function(req, res, next) {
  var newMovie = new MoviesModel({
    //Saving the document 1/2
    title: req.body.title,
    overview: req.body.overview,
    poster_path: req.body.poster_path,
    idMovieDB: req.body.idMovieDB
   
  });

  //Saving the document 2/2
newMovie.save(
  function(error, movie) {
  res.json({ result: true, movie });
});
});


router.delete('/movies/:movieId', function(req, res, next) {
  
  MoviesModel.deleteOne(
    { idMovieDB: req.params.movieId}, 
    function(error, response) {
      res.json({ result: true});
});
});



module.exports = router;
