const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/DREAMDATA")
  .then(() => {
    console.log("Connection Established");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

const newscheme = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newscheme);

module.exports = collection;
