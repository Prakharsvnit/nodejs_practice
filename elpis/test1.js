var request = require('request');
var http = require('http');
var express = require('express');
var app = express();

var requestData = {
	"request":  {
                    "Name": "Prakhar tripathi",
                    "Email": "prakhartripathi.4896@gmail.com",
                    "Phone": "7860304617",
                    "College": "SVNIT,Surat"
                }
}

url = "http://elpisdesign.com/apply.php"

request({
	url: url,
	method: "POST",
	json: requestData,
},function (err, response, body) {
	if(!err && response.statusCode === 200){
		console.log(body);
	}else{
		console.log("error": +error);
		console.log("response.statusCode": +response.statusCode);
		console.log("response.statusText": +response.statusText);
	}
});

var server = app.listen(4000, function() {});