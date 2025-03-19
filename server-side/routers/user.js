const express = require('express')
const userRoute = require("../controller/getUser")
const router = express.Router()

router.route('/user').get(userRoute.isAuthenticated)

module.exports = router