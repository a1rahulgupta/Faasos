var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Order = require("../models/order");
var predictedFood = require("../models/predicted-food");

router.get('/', function (req, res) {
  Order.find((err, orders) => {
    if (err) {
      res.render('index', {
        errors: err
      })
    } else {
      if (orders) {
        res.render('index', {
          order: orders
        })
      }
    }

  })
});

router.get('/add-order', function (req, res) {
  res.render('add-order');
});

router.get('/predict-food', function (req, res) {
  res.render('food-prediction');
});

router.post('/add-order', function (req, res) {
  if (req.body && req.body.name && req.body.quantity) {
    var body = req.body;
    var order = new Order();
    order.name = body.name;
    order.quantity = body.quantity;
    order.orderquantitytillnow = body.quantity;
    order.predictedquantity = body.predictedquantity;
    order.save();
    res.redirect('/')

  }
});



router.post('/:id/:quantity/:orderquantitytillnow', function (req, res) {
  Order.findOne({
    _id: req.params.id
  }).then(function (menu) {
    if (menu) {
      menu.orderquantitytillnow = Number(menu.quantity) + Number(req.params.orderquantitytillnow);
      menu.quantity = Number(req.params.quantity);
      menu.save();
      res.redirect('/');
    } else {
      console.log("Error");
    }
  });
});

router.post('/predict-food', function (req, res) {
  if (req.body && req.body.name && req.body.predictedquantity) {
    var model = new predictedFood();
    var body = req.body;
    model.name = body.name;
    model.predictedquantity = body.predictedquantity;

    model.save((err, updateorder) => {
      if (err) {
        res.render('/', {
          response: err
        })
      } else {
        if (updateorder) {
          res.redirect('/')
        }

      }
    })
  }
});


module.exports = router;