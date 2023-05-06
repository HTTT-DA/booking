const router = require("express").Router();
const propertyController = require("./controller");

router.get("/", (req, res) => {
  res.render("reservation/views/reservation-step-2")
});

module.exports = router;