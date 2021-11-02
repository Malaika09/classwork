var express = require('express');
var productsC = require('../controllers/productsc');
var router = express.Router();

/* GET home page. */
router.get('/', productsC.productsController);

module.exports = router;