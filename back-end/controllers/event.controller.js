const EventModel = require("../models/event.model.js");

const event_controller = {
  getAll: async (req, res) => {
    const events = await EventModel.find();

    if (events.length > 0) {
      res.status(200).send({
        message: "success",
        data: events,
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
    let event;
    try {
      event = await EventModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (event) {
      res.status(200).send({
        message: "success",
        data: event,
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
      response = await EventModel.findByIdAndDelete(id);
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
    const response = await EventModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  post: async (req, res) => {
    const event = new EventModel(req.body);
    await event.save();
    res.send({
      message: "posted",
      data: event,
    });
  },
};

module.exports = event_controller;
