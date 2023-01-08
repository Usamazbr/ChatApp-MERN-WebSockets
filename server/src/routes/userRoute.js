const express = require("express");
const { testFunc, testFunc2 } = require("../controller/userController");

const router = express.Router();

router.route("/test").get(testFunc);
router.route("/chat/:id").get(testFunc2);

module.exports = router;
