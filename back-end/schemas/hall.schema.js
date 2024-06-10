const mongoose = require("mongoose")
const HallSchema = new mongoose.Schema(
    {
        id: String,
        name: String,
        location: String,
        img: String,
        tel: Number,
        map: String,
        events: { type: Array, default: [] }
    },
    { timestamps: true }
);
module.exports = HallSchema;