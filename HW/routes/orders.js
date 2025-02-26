// Daniel Le
var express = require('express');
var router = express.Router();
const ordersData = require('../order.json');
const orders = ordersData.orders;

// get orders
router.get('/', function(req, res, next) {
  // Send the orders array as JSON
  res.json(orders);
});

router.post('/', function(req, res, next) {
    res.json(orders);
});

module.exports = router; 