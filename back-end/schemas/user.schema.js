const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    mobile: {
        type: String, // Telefon numarasını esneklik için string olarak saklıyoruz
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    postCode: {
        type: String, // Posta kodunu string olarak saklıyoruz
        required: true,
    },
    gender: {
        type: String,
        enum: ['female', 'male', 'other'], // Cinsiyetin belirli değerlerden biri olması gerekiyor
        required: true,
    },
    preferredCinema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cinema',
        required: true,
    },
    receiveOffers: {
        type: Boolean,
        default: false,
    },
    agreeTerms: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = UserSchema;