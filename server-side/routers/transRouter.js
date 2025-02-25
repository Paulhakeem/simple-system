const express = require('express')
const trans = require("../controller/transController")


const router = express.Router()

router.route('/transactions').post(trans.createtransaction)



module.exports = router