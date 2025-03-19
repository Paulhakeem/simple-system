const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: String,
  password: { type: String, required: true},
});

userSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 12)
  next()
  })
  
  
  userSchema.methods.comparePassword = async function(userPassword){
  return await bcrypt.compare(userPassword, this.password)
  }


const Users = mongoose.model("Users", userSchema);

module.exports = Users
