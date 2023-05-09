const express = require("express");
const router = express.Router();
const loginController = require("./controller");

router.get("/", loginController.render);

module.exports = router;
