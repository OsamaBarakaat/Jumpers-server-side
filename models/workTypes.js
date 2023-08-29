const mongoose = require('mongoose')
const workTypesSchema = mongoose.Schema(
    {
        name_en: {
            type: String,
            required: [true, "name_en of work types is required"],
            trim: true
        },
        name_ar: {
            type: String,
            required: [true, "name_ar of work types is required"],
            trim: true
        },
        status: {
            type: Boolean,
            required: [true, "status of work types is required"],
            // enum: ['Intermittent', 'Regular'],
            // default: 'Reqular',
        }
    },
    {
        timestamps: true
    }
)

const workTypesModel = mongoose.model("workTypes", workTypesSchema);
module.exports = workTypesModel