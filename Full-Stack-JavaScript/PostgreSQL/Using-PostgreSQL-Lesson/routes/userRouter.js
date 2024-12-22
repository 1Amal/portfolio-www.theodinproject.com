const { Router } = require("express");

// const usersController = require("../controllers/userController");

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.send("usernames will be logged here - wip");
});

usersRouter.get("/new", (req, res) => {
  res.render("new");
});

usersRouter.post("/new", (req, res) => {
  console.log("username to be saved: ", req.body.username);
});

module.exports = usersRouter;
