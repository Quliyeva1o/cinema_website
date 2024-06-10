const express = require("express");
const user_router= express.Router();
const controller = require("../controllers/index.js")
const user_middleware= require("../middlewares/user.post.middleware.js")

user_router.get('/api/users',controller.user.getAll)
user_router.get('/api/users/:id',controller.user.getOne)
user_router.delete('/api/users/:id',controller.user.delete)
user_router.patch('/api/users/:id',controller.user.update)
user_router.post('/api/users',user_middleware,controller.user.post)

module.exports=user_router;