const express = require("express");
const tag_router = express.Router();
const controller = require("../controllers/index");
const authenticateToken = require("../middlewares/authenticate_token");

tag_router.get("/api/tags", authenticateToken,controller.tag.getAll);
tag_router.get("/api/tags/:id", authenticateToken,controller.tag.getOne);
tag_router.delete("/api/tags/:id", controller.tag.delete);
tag_router.patch("/api/tags/:id", controller.tag.update);
tag_router.post("/api/tags", controller.tag.post);


module.exports = tag_router;
