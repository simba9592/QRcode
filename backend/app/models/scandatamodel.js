const mongoose = require("mongoose");

const ScanData = mongoose.model(
    "scandatas",
    new mongoose.Schema({
        customerid: String,
        fullname: String,
        address: String,
        monthlyfee: String,
        date: Date,
    })
);

module.exports = ScanData;