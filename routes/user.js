const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.get('/new', userController.signup)
router.post('/', userController.create)
router.get('/login', userController.login)

module.exports = router