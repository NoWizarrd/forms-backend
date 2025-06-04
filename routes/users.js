const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/User');

router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.get('/', userController.getAllUsers);
router.post('/login', userController.loginUser);

module.exports = router;
