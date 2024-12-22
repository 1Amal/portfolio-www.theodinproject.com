const express = require("express");

const app = express();
const port = 3000;

app.use("/", usersRouter);
const usersRouter = require("./routes/userRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
