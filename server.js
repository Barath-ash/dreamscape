const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./mongo");
const User = require("./src/models/User"); // MongoDB User Model

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

connectDB();

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"; // Fallback if .env missing

// Signup Route
app.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "Missing email or password" });

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "7d" });
        res.cookie("token", token, { httpOnly: true, secure: false, maxAge: 7 * 24 * 60 * 60 * 1000 });
        res.status(201).json({ message: "Signup successful", token });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Signup failed" });
    }
});

// Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found, please sign up" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "7d" });
        res.cookie("token", token, { httpOnly: true, secure: false, maxAge: 7 * 24 * 60 * 60 * 1000 });
        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Login failed" });
    }
});

// Check Session Route
app.get("/check-session", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer token
  if (!token) return res.json({ isAuthenticated: false });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
          console.log("Token verification failed:", err.message);
          return res.json({ isAuthenticated: false });
      }
      res.json({ isAuthenticated: true, email: decoded.email });
  });
});



// Logout Route
app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logout successful" });
});

// Start Server
app.listen(8000, () => {
    console.log("Server running on port 8000...");
});
