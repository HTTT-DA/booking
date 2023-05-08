const router = require("express").Router();
const { Client } = require("cassandra-driver");
const profileController = require("./controller");
const profileModel = require("./model");

router.get("/", profileController.render);

module.exports = router;