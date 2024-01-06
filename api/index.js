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

mongoose
  .connect("mongodb+srv://vivianu2014:vivi123m@cluster1.6ieglfk.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to Mongodb");
  });

app.listen(port, () => {
  console.log("server is running on port 3000");
});

const User = require("./models/user");

//end point to register a user in the backend
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    //create new user
    const newUser = new User({ name, email, password });

    //generate and store the vertification token
    newUser.vertificationToken = crypto.randomBytes(20).toString("hex");

    await newUser.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.log("Error registerning user", error);
    res.status(500).json({ message: "error registerning use " });
  }
});
const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};

const secretKey = generateSecretKey();

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }
    if (user.password !== password) {
      return res.status(404).json({ message: "Invalid passwords" });
    }
    const token = jwt.sign({ userId: user._id }, secretKey);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

// Endpoint to register a veterinarian
const Veterinarian = require("./models/veterinarian");

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
