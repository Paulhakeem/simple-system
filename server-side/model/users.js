const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: { type: String, required: true },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users
