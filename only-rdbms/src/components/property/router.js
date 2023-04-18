const router = require("express").Router();
const propertyController = require("./controller");

router.get("/", propertyController.getAllProperty);

module.exports = router;