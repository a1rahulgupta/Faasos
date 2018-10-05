var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Order = require("../models/order");
var predictedFood = require("../models/predicted-food");

router.get('/', function(req, res) {
  Order.find((err,orders)=>{
    if(err){
      res.render('index',{errors:err})
    }else{
      if(orders){
        res.render('index',{order:orders})
      }
    }
  })
 });

router.get('/add-order', function(req, res) {
 res.render('add-order');
});

router.get('/predict-food', function(req, res) {
  res.render('food-prediction');
 });

router.post('/add-order', function(req, res) {  
     if(req.body && req.body.name && req.body.quantity){
        var model = new Order();
        var body = req.body;
        model.name = body.name;
        model.quantity = body.quantity;
        model.save((err,updateorder)=>{
          if(err){
            res.render('add-order',{response:err})
          }else{
            if(updateorder){
              res.redirect('/')
            }
            
          }
        })
     }
 });

 router.post('/predict-food', function(req, res) {  
  if(req.body && req.body.name && req.body.quantity){
     var model = new predictedFood();
     var body = req.body;
     model.name = body.name;
     model.quantity = body.quantity;
   
     model.save((err,updateorder)=>{
       if(err){
         res.render('/',{response:err})
       }else{
         if(updateorder){
           res.redirect('/')
         }
         
       }
     })
  }
});
 

module.exports = router;