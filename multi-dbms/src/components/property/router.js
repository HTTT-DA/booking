const router = require("express").Router();
const propertyController = require("./controller");

router.get("/", propertyController.searchProperty);
router.get("/:id", propertyController.getPropertyDetail);
router.post("/:id", propertyController.getReserveDetail);
router.get("/:id/reserve", propertyController.getReservationStep2);
router.post("/:id/reserve", propertyController.addPropertyToRedis);

module.exports = router;