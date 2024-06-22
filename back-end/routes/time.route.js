const express = require("express");
const time_router = express.Router();
const controller = require("../controllers/index");
const authenticateToken = require("../middlewares/authenticate_token");

time_router.get("/api/times", authenticateToken,controller.time.getAll);
time_router.get("/api/times/:id", authenticateToken,controller.time.getOne);
time_router.delete("/api/times/:id", controller.time.delete);
time_router.patch("/api/times/:id", controller.time.update);
time_router.post("/api/times", controller.time.post);


module.exports = time_router;
