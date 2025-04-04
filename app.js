const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./mongo");
const User = require("./src/models/User"); // Importing the existing User model
const stripe = require("stripe")("sk_test_51R9mFaQB0UAKZb71A15ChCHGw7fJNCGrNeAaVqwsfsOTa9GKUeResoZNQyhyQAfu1k9NEz6Lzy1hKXcS3cOCeL5v00aYfNwPzb");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

connectDB();
const SECRET_KEY = process.env.SECRET_KEY;

// Middleware to verify token (for protected routes)
const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No Token Provided" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.user = decoded;
    next();
  });
};

// ✅ **Signup Route (Uses Existing `User` Model)**
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "All fields required" });

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ email, name }, SECRET_KEY, { expiresIn: "7d" });
    res.json({ message: "Signup successful", token, user: { name, email } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ **Login Route (Uses Existing `User` Model)**
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "All fields required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email, name: user.name }, SECRET_KEY, { expiresIn: "7d" });

    res.json({ message: "Login successful", token, user: { email, name: user.name } });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ **Logout Route**
app.post("/logout", (req, res) => {
  res.json({ message: "Logout successful" });
});

// ✅ **Protected Route Example**
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "You have access!", user: req.user });
});

// ✅ **Stripe Payment Route**
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { total } = req.body;
    if (!total) return res.status(400).json({ message: "Total amount required" });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: "http://localhost:3000/confirmation",
      cancel_url: "http://localhost:3000/payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Travel Booking",
            },
            unit_amount: Math.round(total * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
    });

    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ message: "Payment error", error: error.message });
  }
});

// ✅ **Server Start**
app.listen(8000, () => {
  console.log("Server running on port 8000...");
});
