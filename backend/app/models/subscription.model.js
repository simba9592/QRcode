const mongoose = require("mongoose");

const Subscription = mongoose.model(
  "Subscription",
  new mongoose.Schema({
    customerid: String,
    firstname: String,
    lastname: String,
    monthlyfee: Number,
    paidsubscription: Number,
  })
);

module.exports = Subscription;
