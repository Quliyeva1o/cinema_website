const mongoose = require("mongoose")
const EventSchema = new mongoose.Schema(
    {
        title:String,
        movies:String,
        img:String,
        description:String
    },
    { timestamps: true }
);
module.exports = EventSchema;