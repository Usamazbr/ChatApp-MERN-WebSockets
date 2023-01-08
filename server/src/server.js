const express = require("express");
const mongoose = require("mongoose").set("strictQuery", true);
const dotenv = require("dotenv").config();

const cors = require("cors");

const userRoute = require("./routes/userRoute");
const app = express();

app.use(express.json());
app.use(cors({}));

const loggerConsole = (req, _, next) => {
  console.log(
    `\x1b[30m` + req.path + `\x1b[0m`,
    `\x1b[33m` + req.method + `\x1b[0m`
  );
  next();
};

app.use(loggerConsole);

app.use("/api/user", userRoute);

mongoose
  .connect(process.env.DATABSE_CONNECT)
  .then(() => {
    console.log("connected to \x1b[36mMongoDb\x1b[0m");
    app.listen(process.env.PORT, () => {
      console.log("listening to port:\x1b[33m", process.env.PORT + "\x1b[0m");
    });
  })
  .catch((error) => console.log(error));
