const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
})

const Shops = mongoose.model("Shops-categories", shopSchema)


module.exports = Shops