const router = require('express').Router();
const userApiController = require('./controller')

router.post('/full-name', userApiController.updateFullname)
router.post('/display-name', userApiController.updateDisplayName)
router.post('/email', userApiController.updateEmail)
router.post('/phone', userApiController.updatePhone)
router.post('/dob', userApiController.updateDob)
