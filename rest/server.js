const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/users', function(req,res) {
	var user_id = req.param('id');
	var token  = req.param('token');
	var geo = req.param('geo');
res.send(user_id + ' '+ token + ' '+ geo);
});

 app.param('name', function(req,res,next,name){
  var modified = name ;
  req.name = modified;
  next();
});

app.get('/users/:name', function(req,res){
  res.send('What is up ' + req.name);
});

app.listen(port);
console.log("We are live at "+ port);