const express = require('express')
const trans = require("../controller/transController")
const protected = require('../middleware/protectRoutes')


const router = express.Router()

router.route('/transactions').post(protected.isAuthenticated, trans.createtransaction)
router.route('/statements').get(protected.isAuthenticated, trans.getTrans)


module.exports = router