const mongoose = require("mongoose");

const timeSchema = new mongoose.Schema(
  {
    movieId: String,
    hallId: String,
    showTime:String
  },
  { timestamps: true }
);

module.exports = timeSchema;
