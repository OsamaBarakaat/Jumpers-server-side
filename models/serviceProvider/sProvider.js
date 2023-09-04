const mongoose = require("mongoose");
const sProviderSvhema = mongoose.Schema(
    {
        name_en: {
            type: String,
            required: [true, 'name_en of service provider is required']
        },
        name_ar: {
            type: String,
            required: [true, 'name_ar of service provider is required']
        },
        profilePicture: {
            type: String,
            required: [true, 'profile picture of service provider is required']
        },
        email: {
            type: String,
            required: [true, 'Email of service provider is required']
        },
        password: {
            type: String,
            required: [true, 'Password of service provider is required']
        },
        phoneNumber: {
            type: Number,
            required: [true, 'phoneNumber of service provider is required']
        },
        city: {
            type: String,
            required: true
        }

    }, { timestamps: true }
)

const sProviderModel = mongoose.model("sProvider", sProviderSvhema);
module.exports = sProviderModel