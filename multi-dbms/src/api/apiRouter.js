const router = require("express").Router();

const profileApiRouter = require("./profile/router");

router.use('/profile', profileApiRouter);

module.exports = router;