const express = require('express');
const router = express.Router();
const controller= require('../controllers/travelList');
/* GET home page. */
router.get('/', controller.travelList);
module.exports = router;
