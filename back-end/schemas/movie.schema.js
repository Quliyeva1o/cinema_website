const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema(
    {
        id: String,
        name: String,
        director: String,
        cast: String,
        img: String,
        genre: String,
        rating: String,
        description: String,
        runTime: Number,
        releaseDate: String,
        trailer: String,
        ageRes: Number,
        sessionTimes: { type: Array, default: [] }
    },
    { timestamps: true }
);
module.exports = MovieSchema;