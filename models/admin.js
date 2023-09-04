const mongoose = require("mongoose")
const adminSchema = mongoose.Schema(
    {
        name_en: {
            type: String,
            required: [true, "name_en of admin is required"],
            trim: true
        },
        name_ar: {
            type: String,
            required: [true, "name_ar is of admin required"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "email of admin is required"],
            trim: true,
            unique: false,
            lowercase: true
        },
        profilePicture: {
            type: String,
        },
        role: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "role",
            required: [true, "role of admin is required"]
        },
        status: {
            type: Boolean,
            required: [true, "status of admin is required"],
            default: false
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: [true, "Password of admin is required"],
            minlength: [8, "very short password"]
        }
    },
    {
        timestamps: true
    }
)
userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(this.password, salt);
        this.password = hashedPassword
    }
    next()

})

const adminModel = mongoose.model("admin", adminSchema);
module.exports = adminModel