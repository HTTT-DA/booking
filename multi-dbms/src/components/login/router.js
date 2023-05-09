const express = require("express");
const router = express.Router();
const loginController = require("./controller");

router.get("/", loginController.render);

router.post("/", loginController.validateUser);
  
router.get("/logout", loginController.logOut);

module.exports = router;
