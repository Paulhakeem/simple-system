const express = require("express");
const trans = require("../controller/transController");

const router = express.Router();

router.route("/transactions").post(trans.createtransaction);
router.route("/statements").get(trans.getTrans);
router.route("/filter-exp").get(trans.filterExpe)
router.route("/filter-inc").get(trans.filterIncome)
router.route("/delete-transaction/:id").delete(trans.deleteTrans)

module.exports = router;
