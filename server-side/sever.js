const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')
const logger = require('morgan')

env.config({ path: "/.config.env" });

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'))
app.use(cors({origin: "*"}))
app.use(express.urlencoded({extended: false}))

mongoose
  .connect('mongodb+srv://admin:gPlXjgJBXSGc2COQ@cluster0.2m2gpna.mongodb.net/cinemax?retryWrites=true&w=majority&appName=Cluster0', {})
  .then((result) => {
    console.log("Database connection successfully");
  })
  .catch((err) => {
    console.log("Database connection field");
  });

app.listen(8000, async () => {
  console.log("Server is running on port 8000..");
});
