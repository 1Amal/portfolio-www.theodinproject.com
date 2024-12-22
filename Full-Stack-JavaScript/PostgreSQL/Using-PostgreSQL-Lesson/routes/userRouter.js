const { Router } = require("express");

const usersController = require("../controllers/userController");

const usersRouter = Router();

usersRouter.get("/", usersController.usersCreateGet);

usersRouter.get("/new", usersController.usersGetNewForm);

usersRouter.post("/new", usersController.usersPostNewForm);

module.exports = usersRouter;
