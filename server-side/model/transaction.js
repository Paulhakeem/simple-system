const mongoose = require('mongoose')

const transSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    date: String,
    userId: String
})

const Transactions = mongoose.model("Transactions", transSchema)


module.exports = Transactions