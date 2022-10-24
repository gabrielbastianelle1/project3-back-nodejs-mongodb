const express = require('express')
const authJwt = require('../middleware/auth.jwt')
const adminController = require('../controllers/controller.admin')
const userController = require('../controllers/controller.user')
const authController = require('../controllers/controller.auth')
const isAdmin = require('../middleware/isAdmin')

const router = express.Router()

// adminRoutes

router.get('/admin/getallusers', [authJwt.verifyToken, isAdmin.isAdmin] ,adminController.getAllUsers)

// authRoutes

router.post('/signup', authController.signup)
router.post('/signin', authController.signin)

// userRoutes

router.get('/user', [authJwt.verifyToken] ,userController.getCurrentUser)

module.exports = router