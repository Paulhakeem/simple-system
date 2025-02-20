const express = require('express')
const createUser = require("../controller/createUser")

const router = express.Router()

router.route('/signup').post(createUser.createUser)


module.exports = router