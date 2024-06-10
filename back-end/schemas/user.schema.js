const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema(
    {
        id: String,
        email: String,
        password: String,
        firstName: String,
        lastName: String,
        mobile: Number,
        birthDate:Number,
        postCode: Number,
        gender:String,
        terms: Boolean,
        tickets: { type: Array, default: [] }
    },
    { timestamps: true }
);
module.exports = UserSchema;