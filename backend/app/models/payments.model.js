const mongoose = require("mongoose");

const Payments = mongoose.model(
  "Payments",
  new mongoose.Schema({
    AmountPaid:Number,
    CustomerID:String,
    Month:String,
    Paid:String,
    PaymentH:Number,
    PaymentID:String,
    Year:Number,
    realamount:Number,

  })
);

module.exports = Payments;
