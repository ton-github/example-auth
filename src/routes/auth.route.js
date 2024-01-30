const express = require('express')

const router = express.Router()
const controller = require('../controllers/auth.controller')

router.route('/register').post(controller.regsiter)
router.route('/login').post(controller.login)

module.exports = router
