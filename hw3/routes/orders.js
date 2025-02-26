var express = require('express');
var router = express.Router();

// get orders
router.get('/', function(req, res, next) {
  // sample data
  const orders = [
    { topping: "cherry", quantity: 2 },
    { topping: "plain", quantity: 6 },
    { topping: "chocolate", quantity: 3 }
  ];
  
  // Send the orders array as JSON
  res.json(orders);
});

router.post('/', function(req, res, next) {
    const orders = [
      { topping: "cherry", quantity: 2 },
      { topping: "plain", quantity: 6 },
      { topping: "chocolate", quantity: 3 }
    ];
    
    res.json(orders);
});

module.exports = router; 