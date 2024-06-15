const mongoose = require("mongoose")
const HallSchema = new mongoose.Schema(
    {
        id: String,
        name: String,
        location: String,
        img: String,
        adress: String,
        map: String,
        events: { type: Array, default: [] },
        tags: { type: Array, default: [] }
    }, 
    { timestamps: true }
);
module.exports = HallSchema;