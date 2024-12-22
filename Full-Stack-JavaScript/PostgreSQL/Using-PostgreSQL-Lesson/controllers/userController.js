exports.usersCreateGet = (req, res) => {
  res.send("usernames will be logged here - wip");
};

exports.usersGetNewForm = (req, res) => {
  res.render("new");
};

exports.usersPostNewForm = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
