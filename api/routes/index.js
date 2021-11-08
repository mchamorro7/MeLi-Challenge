
const express = require('express');
const { itemController } = require('../controllers');
const router = express.Router();

router.get('/items/:id', itemController.getItem);
router.get('/items', itemController.getItems);

module.exports = router;