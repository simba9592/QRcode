const mongoose = require("mongoose");

const Buildings = mongoose.model(
  "Buildings",
  new mongoose.Schema({
    BldgAddress: String,
    BldgID: String,
    BldgName: String,
    BldgOrder: Number,
    Region: String,
  })
);

module.exports = Buildings;
