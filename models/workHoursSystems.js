const mongoose = require("mongoose")
const workHoursSystemsSchema = mongoose.Schema(
    {
        workHours: {
            type: Number,
            required: [true, "work hours is required"],
        },
        minPrice: {
            type: Number,
            required: [true, "min_price of work hours is required"],

        },
        decription_en: {
            type: String,
            required: [true, "decription_en of work hours is required"],
            trim: true
        },
        decription_ar: {
            type: String,
            required: [true, "decription_ar of work hours is required"],
            trim: true
        }
    },
    {
        timestamps: true
    }
)

const workHoursSystemsModel = mongoose.model("role", workHoursSystemsSchema);
module.exports = workHoursSystemsModel