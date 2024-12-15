const express = require("express");
const app = express();
const PORT = 3000;

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("NodeJs Views Lesson");
});

app.listen(PORT, () => {
  console.log("EJS Views");
});
