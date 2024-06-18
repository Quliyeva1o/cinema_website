const TagModel = require('../models/tag.model');

const tag_controller = {
  getAll: async (req, res) => {
    const { title } = req.query;
    let tags;
    if (title) tags = await TagModel.find({ title: title });
    else tags = await TagModel.find();

    if (tags.length > 0) {
      res.status(200).send({
        message: "success",
        data: tags,
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
    let tag;
    try {
      tag = await TagModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (tag) {
      res.status(200).send({
        message: "success",
        data: tag,
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
      response = await TagModel.findByIdAndDelete(id);
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
    const response = await TagModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  post: async (req, res) => {
    const tag = new TagModel(req.body);
    await tag.save();
    res.send({
      message: "posted",
      data: tag,
    });
  },
};

module.exports = tag_controller;
