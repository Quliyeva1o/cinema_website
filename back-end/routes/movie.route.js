const express = require("express");
const movie_router = express.Router();
const upload = require("../middlewares/movie.post.middleware.js");
const controller = require("../controllers/index.js");

movie_router.get('/api/movies', controller.movie.getAll);
movie_router.get('/api/movies/:id', controller.movie.getOne);
movie_router.delete('/api/movies/:id', controller.movie.delete);
movie_router.patch('/api/movies/:id', controller.movie.update);

// Use multer middleware for file uploads
movie_router.post("/api/movies",
  upload.fields([{ name: "bgImg", maxCount: 1 }, { name: "coverImg", maxCount: 1 }]),
  controller.movie.post
);

module.exports = movie_router;
