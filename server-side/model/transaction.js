const mongoose = require('mongoose')

const transSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, min: 0 },
    date: String,
    userId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
},{ timestamps: true })

const Transactions = mongoose.model("Transactions", transSchema)


module.exports = Transactions