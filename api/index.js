const express = require("express");
const cors = require("cors");
const app = express();
// const mongoose = require("mongoose");
// const User = require("./models/User");

app.use(cors());
// app.use(express.json());

// mongoose.connect(
//   "mongodb+srv://cluster0:DBKimeF-w57vW%40v@cluster0.id0ym.mongodb.net/blog?retryWrites=true&w=majority"
// );

app.post("/register", (req, res) => {
  res.json("test ok");
});
// app.get("/test", (req, res) => {
//   res.json("test ok");
// });

// app.post("/register", (req, res) => {
//   const { username, password } = req.body;
//   const userDoc = User.create({ username, password });
//   res.json(userDoc);
// });

app.listen(4000);
//mongodb+srv://blog:<DBKimeF-w57vW@v>@cluster0.id0ym.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//DBKimeF-w57vW@v
