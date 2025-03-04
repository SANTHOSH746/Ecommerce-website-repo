const { Router } = require("express");
const userModel = require("../Model/userModel");
const bcrypt = require("bcrypt");
const { upload } = require("../../multer");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./src/config/.env" });

const secret = process.env.private_key;

const userrouter = Router();

// Create a new user
userrouter.post("/create-user", upload.single("file"), async (req, res) => {
  const { name, email, password } = req.body;
  const userEmail = await userModel.findOne({ email });

  if (userEmail) {
    return res.status(400).json({ message: "User already exists" });
  }

  bcrypt.hash(password, 10, async function (err, hash) {
    await userModel.create({
      name: name,
      email: email,
      password: hash,
    });
    res.status(201).json({ message: "User created successfully" });
  });
});

// Login user
userrouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const check = await userModel.findOne({ email: email });

  if (!check) {
    return res.status(400).json({ message: "User not found" });
  }

  bcrypt.compare(password, check.password, function (err, result) {
    if (err) {
      return res.status(400).json({ message: "Invalid bcrypt compare" });
    }
    if (result) {
      jwt.sign({ email: email }, secret, (err, token) => {
        if (err) {
          return res.status(400).json({ message: "Invalid jwt" });
        }
        res.status(200).json({ token: token });
      });
    } else {
      return res.status(400).json({ message: "Invalid password" });
    }
  });
});

// Fetch user profile
userrouter.get("/profile", async (req, res) => {
  const { email } = req.query;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update user address
userrouter.post("/update-address", async (req, res) => {
  const { email, address } = req.body;
  try {
    const user = await userModel.findOneAndUpdate(
      { email },
      { address },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "Address updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating address" });
  }
});

module.exports = userrouter;
