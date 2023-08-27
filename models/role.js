const mongoose = require('mongoose')
const roleSchema = mongoose.Schema(
    {
        name_en: {
            type: String,
            required: [true, "name_en is required"],
            trim: true
        },
        name_ar: {
            type: String,
            required: [true, "name_ar is required"],
            trim: true
        },
        terms: [
            {
                type: Boolean,
                required: true,
            }
        ]
    },
    {
        timestamps: true
    }
)

const roleModel = mongoose.model("role", roleSchema);
module.exports = roleModel