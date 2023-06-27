const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    Active: Boolean,
    Address: String,
    BuildingName: String,
    Comment: String,
    CustomerID: Number,
    DateOfSubscription: Number,
    FirstName: String,
    LastName: String,
    FloorNumber: String,
    MonthlyFee: Number,
    PhoneNumber: String,
    Region: String,
    Subscriptiontype: String,
    Subscriptiontype1: String,
    Title: String,
    buildingid: String,
  })
);

module.exports = Customer;
