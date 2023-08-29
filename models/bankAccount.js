const mongoose = require("mongoose")
const bankAccSchema = mongoose.Schema(
    {
        name_en: {
            type: String,
            required: [true, "the name_en of the bank is required"],
            trim: true
        },
        name_ar: {
            type: String,
            required: [true, "the name_ar of the bank is required"],
            trim: true
        },
        picture: {
            type: String,
            required: [true, "the picture of the bank is required"],
            trim: true
        }
    },
    {
        timestamps: true
    }
)

const bankAccModel = mongoose.model("bankAcc", bankAccSchema);
module.exports = bankAccModel