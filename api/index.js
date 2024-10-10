const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://blogger:raBANyvLmkJe1hIR@cluster0.1lfeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// app.get("/test", (req, res) => {
//   res.json("test ok");
// });

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(4000);
//mongodb+srv://blogger:raBANyvLmkJe1hIR@cluster0.1lfeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//raBANyvLmkJe1hIR
