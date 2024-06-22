const TimeModel = require('../models/time.model');

const time_controller = {
  getAll: async (req, res) => {
    const { title } = req.query;
    let times;
    if (title) times = await TimeModel.find({ title: title });
    else times = await TimeModel.find();

    if (times.length > 0) {
      res.status(200).send({
        message: "success",
        data: times,
      });
    } else {
      res.status(204).send({
        message: "not found",
        data: null,
      });
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    let time;
    try {
      time = await TimeModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (time) {
      res.status(200).send({
        message: "success",
        data: time,
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
      response = await TimeModel.findByIdAndDelete(id);
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
    const response = await TimeModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  post: async (req, res) => {
    const time = new TimeModel(req.body);
    await time.save();
    res.send({
      message: "posted",
      data: time,
    });
  },
};

module.exports = time_controller;
