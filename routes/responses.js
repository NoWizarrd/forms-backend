const express = require('express');
const router = express.Router();
const responseController = require('../controllers/responseController');

router.post('/:formId', responseController.submitResponse);
router.get('/:formId', responseController.getResponsesByFormId);
router.get('/', responseController.getAllResponses);

module.exports = router;
