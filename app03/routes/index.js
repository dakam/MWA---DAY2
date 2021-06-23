const express = require("express");
const pcont = require("../controllers/playController");

const router = express.Router();

router.route("/play/:x")
.get(pcont.MultiplyNums);


module.exports = router;


