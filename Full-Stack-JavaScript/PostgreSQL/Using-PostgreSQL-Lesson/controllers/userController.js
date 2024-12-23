const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

// exports.usersCreateGet = (req, res) => {
//     res.send("usernames will be logged here - wip");
//   };

async function createUsernameGet(req, res) {
  res.render("new");
}

// exports.usersGetNewForm = (req, res) => {
//     res.render("new");
//   };

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

//   exports.usersPostNewForm = (req, res) => {
//     console.log("username to be saved: ", req.body.username);
//   };

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
