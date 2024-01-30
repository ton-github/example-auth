const express = require('express')

const router = express.Router()
const controller = require('../controllers/user.controller')

router.route('/get').post(controller.getUser)

module.exports = router
