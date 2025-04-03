const express = require("express");
const cors = require("cors");
const collection = require("./mongo");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Login Route
app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await collection.findOne({ email });

    if (!user) {
      return res.json("Not Exist");
    }

    if (user.password === password) {
      return res.json("Success");
    } else {
      return res.json("Wrong Password");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error Occurred");
  }
});

// Signup Route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email });
    if (check) {
      return res.json("Exist");
    } else {
      const newUser = new collection({ email, password });
      await newUser.save();
      return res.json("User Created");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json("Error Occurred");
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000...");
});
