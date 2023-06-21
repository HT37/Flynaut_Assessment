import { Router } from "express";
import express from "express";
import { User } from "../database/models/User.js";
import bcrypt from 'bcrypt';
import { auth } from "../middlewares/auth.js";
import cookieParser from 'cookie-parser';
import { v4 as uuidv4 } from 'uuid';
import { Session } from "../database/models/Session.js";

const authRouter = Router();

// Use the cookie-parser middleware
authRouter.use(cookieParser());

// Apply the auth middleware to protected routes
authRouter.get("/protected", auth, (req, res) => {
  // This route requires authentication
  const userId = req.cookies.userId;

  // Use the userId value as needed
  console.log("User ID:", userId);
  res.json({ message: "Access granted" });
});

authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check if both username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      // User not found
      return res.status(404).json({ message: "User not found" });
    }
    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      // Invalid password
      return res.status(401).json({ message: "Invalid password" });
    }
    // Password is valid, login successful
    const userId = user._id;

    // Generate a unique token for the session
    const token = uuidv4();

    // Save the token and user ID in the session document in the database
    const session = new Session({ token, user: userId });
    await session.save();

    // Set the token cookie
    res.cookie('token', token, {
      sameSite: 'none',
      secure: true,
    });

    console.log("Token:", token);
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: "Internal server error" });
  }
});


export default authRouter;
