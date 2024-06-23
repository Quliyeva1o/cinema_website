const express = require("express");
const hall_router= express.Router();
const controller = require("../controllers/index.js")
const hall_middleware= require("../middlewares/hall.post.middleware.js");
const upload = require("../middlewares/movie.post.middleware.js");

hall_router.get('/api/halls',controller.hall.getAll)
hall_router.get('/api/halls/:id',controller.hall.getOne)
hall_router.delete('/api/halls/:id',controller.hall.delete)
hall_router.patch('/api/halls/:id',controller.hall.update)
hall_router.post('/api/halls',upload.single("img"),controller.hall.post)

module.exports=hall_router;