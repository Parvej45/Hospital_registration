const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  pincode: Number,
  date: String,
  ambulance: Number,
  email: String,
  phone: Number,
  registrationNumber: String,
  em_ward: String,
  pass: String,
});

module.exports = mongoose.model("registrations", registrationSchema);
