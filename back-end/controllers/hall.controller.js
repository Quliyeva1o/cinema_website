const HallModel = require("../models/hall.model.js");

const hall_controller = {
  getAll: async (req, res) => {
    const halls = await HallModel.find();

    if (halls.length > 0) {
      res.status(200).send({
        message: "success",
        data: halls,
      });
    } else {
      res.send({
        message: "not found",
        data: null,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    let hall;
    try {
      hall = await HallModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (hall) {
      res.status(200).send({
        message: "success",
        data: hall,
      });
    } else {
      res.send({
        message: "no content",
        data: null,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    let response;
    try {
      response = await HallModel.findByIdAndDelete(id);
    } catch (error) {
      res.send({
        error: error,
      });
    }
    res.send({
      message: "deleted",
      response: response,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const response = await HallModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  post: async (req, res) => {
    const hall = new HallModel(req.body);
    await hall.save();
    res.send({
      message: "posted",
      data: hall,
    });
  },
};

module.exports = hall_controller;
