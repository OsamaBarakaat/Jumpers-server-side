const mongoose = require('mongoose')
const serviceSchema = mongoose.Schema(
    {
        name_en: {
            type: String,
            required: [true, "name_en of service is required"],
            trim: true
        },
        name_ar: {
            type: String,
            required: [true, "name_ar of service is required"],
            trim: true
        },
        picture: {
            type: String,
            required: [true, "picture of service is required"],
        },
        description_en: {
            type: String,
            required: [true, "description_en of service is required"],
            trim: true
        },
        description_ar: {
            type: String,
            required: [true, "description_ar of service is required"],
            trim: true
        }

    },
    {
        timestamps: true
    }
)

const serviceModel = mongoose.model("role", serviceSchema);
module.exports = serviceModel