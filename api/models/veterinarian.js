// Import the mongoose library
const mongoose = require("mongoose");

// Define the veterinarian schema using mongoose.Schema
const veterinarianSchema = new mongoose.Schema({
  // Veterinarian's name
  name: {
    type: String,
    required: true, // Field is required
  },
  // Unique identifier for the veterinarian (e.g., employee ID)
  vetId: {
    type: String,
    required: true, // Field is required
  },
  // Veterinarian's password
  password: {
    type: String,
    required: true, // Field is required
  },
  // Veterinarian's phone number
  phoneNumber: {
    type: String,
  },
  // Date when the veterinarian joined (default to the current date and time)
  joinedDate: {
    type: Date,
    default: Date.now,
  },
});

// Create a mongoose model named "Veterinarian" based on the veterinarian schema
const Veterinarian = mongoose.model("Veterinarian", veterinarianSchema);

// Export the Veterinarian model for use in other files
module.exports = Veterinarian;
