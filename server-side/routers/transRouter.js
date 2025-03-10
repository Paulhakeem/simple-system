const express = require("express");
const trans = require("../controller/transController");
const protected = require("../middleware/protectRoutes");

const router = express.Router();

router.route("/transactions").post(trans.createtransaction);
router.route("/statements").get(trans.getTrans);

module.exports = router;
