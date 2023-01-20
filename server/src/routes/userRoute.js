const express = require("express");
const {
  testFunc,
  testFunc2,
  testFunc3,
} = require("../controller/userController");

const router = express.Router();

router.route("/test").get(testFunc);
router.route("/chats").get(testFunc2);
router.route("/chat/:id").get(testFunc3);

module.exports = router;
