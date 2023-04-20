const router = require("express").Router();
const propertyController = require("./controller");

router.get("/", propertyController.getAllProperty);
router.get("/id", propertyController.getPropertyDetail);

module.exports = router;