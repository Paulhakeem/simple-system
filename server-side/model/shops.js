const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    name: String,
    userId: String
})

const Shops = mongoose.model("Shops-categories", shopSchema)


module.exports = Shops