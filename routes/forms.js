const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/', formController.createForm);
router.get('/:id', formController.getFormById);
router.get('/', formController.getAllForms);
router.get('/creator/:email', formController.getFormsByEmail);

router.delete('/:id', formController.deleteForm);


module.exports = router;
