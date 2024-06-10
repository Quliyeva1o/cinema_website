const mongoose = require("mongoose")
const EventSchema = new mongoose.Schema(
    {
        id:String,
        title:String,
        video:String,
        img:String,
        desc:String
      
    },
    { timestamps: true }
);
module.exports = EventSchema;