const router = require("express").Router();
const userController = require("./user-controller");

router.get("/", userController.hello);

module.exports = router;