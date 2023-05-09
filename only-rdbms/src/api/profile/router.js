const router = require('express').Router();
const userApiController = require('./controller')

router.post('/full-name', userApiController.updateFullName)
router.post('/display-name', userApiController.updateDisplayName)
router.post('/email', userApiController.updateEmail)
router.post('/phone', userApiController.updatePhone)
router.post('/dob', userApiController.updateDob)
router.post('/nationality', userApiController.updateNationality)
router.post('/gender', userApiController.updateGender)
router.post('/address', userApiController.updateAddress)
