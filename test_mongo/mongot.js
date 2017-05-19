var express = require('express');
var app = express();
var port = 4000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");


var nameSchema = new mongoose.Schema({
	firstName: String,
	lastName: String
});
var User = mongoose.model("User", nameSchema);

app.post("/addname", (req,res) => {
	var myData = new User(req.body);
	myData.save()
		.then(item => {
			res.send('item saved to database');
			})
		.catch(err =>{
			res.status(400).send("unable to save");
			});
});

app.use("/", function(req,res) {
	res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
	console.log("Listening on port " + port);
});
