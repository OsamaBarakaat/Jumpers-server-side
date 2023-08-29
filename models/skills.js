const mongoose = require('mongoose')
const skillsSchema = mongoose.Schema(
    {
        name_en: {
            type: String,
            required: [true, "name_en of skills is required"],
            trim: true
        },
        name_ar: {
            type: String,
            required: [true, "name_ar of skills is required"],
            trim: true
        },
        description_en: {
            type: String,
            required: [true, "description_en of skills is required"],
            trim: true
        },
        description_ar: {
            type: String,
            required: [true, "description_ar of skills is required"],
            trim: true
        },
    },
    {
        timestamps: true
    }
)

const skillsModel = mongoose.model("skills", skillsSchema);
module.exports = skillsModel