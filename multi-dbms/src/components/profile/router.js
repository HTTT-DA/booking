const router = require("express").Router();
const profileController = require("./controller");

router.get("/", profileController.render);

module.exports = router;