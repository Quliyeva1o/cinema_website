const mongoose = require("mongoose");
const MovieSchema = new mongoose.Schema(
    {
        id: String,
        name: String,
        director: String,
        cast: String,
        bgImg: String,
        genre: String,
        rating: String,
        description: String,
        runTime: Number,
        coverImg: String,
        trailers: { type: Array, default: [] },
        releaseDate: String,
        ageRes: Number,
        halls: { type: Array, default: [] },
        sessionTimes: { type: Array, default: [] }
    },
    { timestamps: true }
);
module.exports = MovieSchema;