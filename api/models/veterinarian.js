const mongoose = require("mongoose");

const veterinarianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  vetId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
  },
  joinedDate: {
    type: Date,
    default: Date.now,
  },
});

const Veterinarian = mongoose.model("Veterinarian", veterinarianSchema);
module.exports = Veterinarian;
