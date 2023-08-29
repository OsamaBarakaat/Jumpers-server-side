const mongoose = require("mongoose");
const invoicesٍSchema = mongoose.Schema(
    {

    }, { timestamps: true }
)

const invoicesModel = mongoose.model("invoices", invoicesٍSchema);
module.exports = invoicesModel