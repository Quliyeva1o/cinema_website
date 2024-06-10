const MovieModel = require("../models/movie.model.js");

const movie_controller = {
  getAll: async (req, res) => {
    const movies = await MovieModel.find();

    if (movies.length > 0) {
      res.status(200).send({
        message: "success",
        data: movies,
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
    let movie;
    try {
      movie = await MovieModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (movie) {
      res.status(200).send({
        message: "success",
        data: movie,
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
      response = await MovieModel.findByIdAndDelete(id);
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
    const response = await MovieModel.findByIdAndUpdate(id, req.body);
    res.send({
      message: "updated",
      response: response,
    });
  },
  post: async (req, res) => {
    const movie = new MovieModel(req.body);
    await movie.save();
    res.send({
      message: "posted",
      data: movie,
    });
  },
};

module.exports = movie_controller;
