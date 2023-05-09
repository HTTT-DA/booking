const router = require("express").Router();
const propertyController = require("./controller");

router.get("/", propertyController.searchProperty);
router.get("/:id", propertyController.getPropertyDetail);
router.post("/:id", propertyController.getReserveDetail);

module.exports = router;