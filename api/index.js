const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "dbaw7dp9awbdadjbaw97dawbdu21bn1";

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
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

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    //logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.listen(4000);
//mongodb+srv://blogger:raBANyvLmkJe1hIR@cluster0.1lfeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//raBANyvLmkJe1hIR
