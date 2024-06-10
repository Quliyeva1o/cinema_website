const mongoose = require("mongoose");
const HallSchema = require("../schemas/hall.schema");
const HallModel = mongoose.model("Halls", HallSchema);
module.exports = HallModel;