const mongoose = require("mongoose");

const Invoice = mongoose.model(
    "Invoice",
    new mongoose.Schema({
        invoicenumber: Number,
        monthvalue: {
            label:String,
            value:String,
        },
        regionvalue: {
            label:String,
            value:String,
        },
        setdate: Date,
        yearvalue: {
            label:String,
            value:String,
        }
    })
);

module.exports = Invoice;