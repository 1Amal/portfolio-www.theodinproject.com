const express = require("express");
const app = express();
const PORT = 3000;
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

const path = require("node:path");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   res.send("NodeJs Views Lesson");
  res.render("index", { links: links, users: users });
  // console.log(message)
});

app.listen(PORT, () => {
  console.log("EJS Views");
});
