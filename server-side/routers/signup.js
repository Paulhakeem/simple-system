const express = require('express')
const createUser = require("../controller/createUser")

const router = express.Router()

router.route('/singup').post(createUser.createUser)