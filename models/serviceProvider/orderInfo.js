const mongoose = require("mongoose");
const orderInfoSchema = mongoose.Schema(
    {
        sProvider: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "sProvider",
            required: [true, "service provider ID is required"]
        }, serviceName: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "service",
            required: [true, "service is required"]
        },
        numOfJumpers: {
            type: Number,
            required: [true, "number of jumpers is required"]
        },
        nationality: {
            type: String,
            enum: ['Saudi', 'Undefined'],
            default: 'Saudi'
        },
        gender: {
            type: String,
            enum: ['Male', 'Female'],
            default: 'Male'
        },
        Age: {
            type: Number
        },
        skills: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'skills',
            required: [true, 'skills is required']
        },
        cityOfWork: {
            type: String,
            required: [true, 'city of work is required']
        },
        addressDetails: {
            type: String,
            required: [true, 'address details is required']
        }
        ,
        location: {
            type: String,
        }
    }, { timestamps: true }
)

const orderInfoModel = mongoose.model("orderInfo", orderInfoSchema);
module.exports = orderInfoModel