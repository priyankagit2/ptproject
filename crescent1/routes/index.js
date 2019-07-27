var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
require('../models/batch');
var mongoose = require('mongoose');
var Person = mongoose.model('persons');

router.post('/add', function(req, res) {
  new Person({
    name : req.body.name, 
    email : req.body.email,
    password : req.body.password,
    budget:req.body.budget,
    people:req.body.people,
    date:req.body.date
    // weight :req.body.weight,
    // height:req.body.height
  }
)
  .save(function(err, Person) {
    console.log(Person)   //terminal print
    res.json(Person);     //Print in Postman 
  });
});

router.get('/view', function(req,res){
  Person.find(function(err,Person){
    console.log(Person)
    res.json(Person);
  })
})
router.put('/update/:id', function(req, res) {
  var query = {"_id": req.params.id};
  var update = {name : req.body.name,
    name : req.body.name, 
    email : req.body.email,
    password : req.body.password,
    // weight :req.body.weight,
    // height :req.body.height
  }
  var options = {new: true};
  Person.findOneAndUpdate(query, update, options, function(err, Person){
    console.log(Person)
    res.json(Person);
  });
});  
 
router.get('/delete/:id', function(req, res) {   
  var query = {"_id": req.params.id};
  Person.findOneAndRemove(query, function(err, Person){
    console.log(Person)
    res.json(Person);
  });
});


router.post('/signin',(req,res)=>{
  const name = req.body.name;
  const password = req.body.password;
  console.log(name)
  Person.findOne({
      name:name

  },(err,user)=>{
      if(err){
          res.json(err);
      }
      else{
          console.log(user);
          if(user == null ){
            res.json({message:"Check your Username"});
          }
          else if (user.password != password){
              res.json({message:"Check your password"});
              
          }
          else{
              res.json(user);
          }
      }
  })
})
module.exports = router;
