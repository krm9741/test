const mongoose = require("mongoose");
const userdata = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Password: { type: String, required: true, min: 8 },
    Emailid: { type: String, required: true, unique: true },
    Mobilenumber: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("userschema", userdata);
