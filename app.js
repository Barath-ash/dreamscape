const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./mongo"); 

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

connectDB();
const SECRET_KEY = process.env.SECRET_KEY;

const users = new Map(); // Temporary storage

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access Denied: No Token Provided" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.user = decoded;
    next();
  });
};

// Signup Route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  if (users.has(email)) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.set(email, hashedPassword);

  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "7d" });

  res.cookie("token", token, { httpOnly: true, secure: false, maxAge: 7 * 24 * 60 * 60 * 1000 });
  res.status(201).json({ message: "Signup successful", token });
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!users.has(email)) return res.status(400).json({ message: "User not found, please sign up" });

  const isMatch = await bcrypt.compare(password, users.get(email));
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "7d" });

  res.cookie("token", token, { httpOnly: true, secure: false, maxAge: 7 * 24 * 60 * 60 * 1000 });
  res.json({ message: "Login successful", token });
});

// Check Session (Auto-login on refresh)
app.get("/check-session", (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.json({ isAuthenticated: false });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.json({ isAuthenticated: false });
    res.json({ isAuthenticated: true, email: decoded.email, token });
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
