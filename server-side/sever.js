const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");
const newUser = require("./routers/signup");
const loginUser = require("./routers/login");
const createTrans = require("./routers/transRouter");
const user = require("./routers/user")
const createShop = require("./routers/shop")

env.config({ path: "./.env" });

const app = express();

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.CONNECTION_STR, {})
  .then((result) => {
    console.log("Database connection successfully");
  })
  .catch((err) => {
    console.log("Database connection field");
  });

// ROUTERS
app.use("/", newUser);
app.use("/", loginUser);
app.use("/", createTrans);
app.use('/', user)
app.use('/', createShop)
// END ROUTERS

app.listen(8000, async () => {
  console.log("Server is running on port 8000..");
});
