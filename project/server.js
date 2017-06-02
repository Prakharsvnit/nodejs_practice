var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
var port = process.env.PORT || 8080;
var MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://peter:parker@ds147599.mlab.com:47599/quotes', function(err, database){
	if(err){
		console.log(err);
	}
	db = database;
	app.listen(port);
	console.log('Listening on ' + port);
})

app.post('/quotes', function(req, res){
	db.collection('quotes').save(req.body, function(err, result){
		if(err){
			console.log(err);
		}
		console.log('saved to database');
		res.redirect('/');
	})
});


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
		db.collection('quotes').find().toArray(function(err,results){
			if(err){
				return console.log(err);
			}
	res.render('index.ejs', {quotes: results});
	});
});
