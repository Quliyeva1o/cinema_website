const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema(
    {
        id: String,
        name: String,
        director: String,
        cast: String,
        genre: String,
        rating: Number,
        description: String,
        runTime: Number,
        releaseDate: Number,
        trailer: String,
        ageRes: Number,
        sessionTimes: { type: Array, default: [] }
    },
    { timestamps: true }
);
module.exports = MovieSchema;