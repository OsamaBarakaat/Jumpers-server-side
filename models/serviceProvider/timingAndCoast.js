const mongoose = require("mongoose");
const timingCostSchema = mongoose.Schema(
    {
        orderInfo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'orderinfo',
            required: [true, 'orderInfo id is required']
        },
        workHours: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'workHoursSystem',
            required: [true, 'work hours is required']
        },
        workDays: {
            type: Number,
            required: [true, 'work days is required']
        },
        workType: {
            type: String,
            required: [true, 'work days is required '],
            enum: ['متصل', 'متقطع'],
            default: 'متصل'
        },
        durationOfAcceptance: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: [true, 'start date is required '],
        },
        endDate: {
            type: Date,
            required: [true, 'end date is required '],
        },
        suggestedCost: {
            type: Number,
            required: [true, 'suggested Cost is required ']
        },
        totalCost: {
            type: Number,
            required: [true, 'total Cost is required ']
        },
        description: {
            type: String,
            required: [true, 'Description of timing and cost is required']
        }

    }, { timestamps: true }
)

const timingCostModel = mongoose.model("timingCost", timingCostSchema);
module.exports = timingCostModel