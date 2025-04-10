const express = require('express')
const shop = require("../controller/AddShop")
const router = express.Router()

router.route('/create-shop-category').post(shop.addShop)
router.route('/shops').get(shop.getShops)
router.route('/delete-shop/:id').delete(shop.deleteShop)

module.exports = router