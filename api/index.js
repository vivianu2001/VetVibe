const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://vivianu2014:vivi123m@cluster1.6ieglfk.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

// Start the server
app.listen(port, () => {
  console.log("Server is running on port 3000");
});

// Import the User model
const User = require("./models/user");

// Endpoint to register a user
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create a new user
    const newUser = new User({ name, email, password });

    // Generate and store the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.log("Error registering user", error);
    res.status(500).json({ message: "Error registering user" });
  }
});

// Function to generate a secret key
const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

// Generate a secret key
const secretKey = generateSecretKey();

// Endpoint to handle user login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }

    if (user.password !== password) {
      return res.status(404).json({ message: "Invalid password" });
    }

    // Sign a JWT token with the user's ID and the secret key
    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

// Import the Veterinarian model
const Veterinarian = require("./models/veterinarian");
// Endpoint to handle veterinarian login
app.post("/loginv", async (req, res) => {
  try {
    const { vetId, password } = req.body;
    const veterinarian = await Veterinarian.findOne({ vetId });

    if (!veterinarian) {
      return res.status(404).json({ message: "Invalid id" });
    }

    if (veterinarian.password !== password) {
      return res.status(404).json({ message: "Invalid password" });
    }

    // Sign a JWT token with the user's ID and the secret key
    const token = jwt.sign({ userId: veterinarian._id }, secretKey);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

// Endpoint to check if a vet ID is valid
// Get the collection
app.get("/checkVetId/:id", async (req, res) => {
  try {
    const enteredVetId = req.params.id;

    // Check if the vet ID exists in the VetId collection
    const vetIdCollection =
      mongoose.connection.db.collection("VeterinarianIDs");

    // Check if the vet ID exists in the collection
    const existingVetId = await vetIdCollection.findOne({
      vetId: enteredVetId,
    });

    if (existingVetId) {
      res.json({ isValid: true });
    } else {
      res.json({ isValid: false });
    }
  } catch (error) {
    console.error("Error checking vet ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to register a veterinarian
app.post("/registerVeterinarian", async (req, res) => {
  try {
    const { name, vetId, password, phoneNumber } = req.body;
    const existingV = await Veterinarian.findOne({ vetId });

    if (existingV) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create a new veterinarian user
    const newVeterinarian = new Veterinarian({
      name,
      vetId,
      password,
      phoneNumber,
    });

    // Generate and store the verification token (if needed)
    newVeterinarian.verificationToken = crypto.randomBytes(20).toString("hex");

    // Save the new veterinarian to the database
    await newVeterinarian.save();

    // Send a response indicating successful registration
    res
      .status(201)
      .json({ message: "Registration successful for veterinarian" });
  } catch (error) {
    console.log("Error registering veterinarian", error);
    res.status(500).json({ message: "Error registering veterinarian" });
  }
});
