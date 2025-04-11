const mongoose = require("mongoose");

const transSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    amount: { type: Number, required: true },
    date: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true }
);

const Transactions = mongoose.model("Transactions", transSchema);

module.exports = Transactions;
