const express = require("express");
const movie_router= express.Router();
const movie_middleware= require("../middlewares/movie.post.middleware.js")

const controller = require("../controllers/index.js");
const upload = require("../middlewares/movie.post.middleware.js");
movie_router.get('/api/movies',controller.movie.getAll)
movie_router.get('/api/movies/:id',controller.movie.getOne)
movie_router.delete('/api/movies/:id',controller.movie.delete)
movie_router.patch('/api/movies/:id',controller.movie.update)
movie_router.post("/api/movies", upload.single("bgImg"), controller.movie.post); 

module.exports=movie_router;