var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema here is method

var Person = new Schema(    //Person is object 
      {name: String, email: String , password: String,
      budget:String,people:String,date:String}  //name here is property and string is value
 
);

mongoose.model('persons',Person);      //to make a collection we use mongoose.model('<collectionName>',Object)