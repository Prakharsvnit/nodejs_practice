var http = require('http');
var express = require('express');
var app = express();

var reqData =   {
                    "name": "Prakhar tripathi",
                    "email": "prakhartripathi.4896@gmail.com",
                    "github": "https://github.com/prakharsvnit",
                    "current_location": "Jhansi,U.P.",
                    "blog": "NA",
                    "resume": "https://docs.google.com/document/d/1OG3YSkUwS_udnAb00Ensy6bzVtx2uaENG41VxewS_FE/edit?usp=sharing",
                    "phone": "+917860304617"
                };

var reqBody = JSON.stringify(reqData);

var options = {
	hostname: "elpisdesign.com",
	path: "/apply.php",
	method: "POST",
	headers: {
		"Content-Type": "application/json",
		'Content-Length': Buffer.byteLength(reqBody)
	}
};

var req = http.request(options, function(res){
	var responseString = "";
	
	res.on("data", function(data){
		responseString += data;
	});

	res.on("end", function(){
		console.log(responseString);
	});
});

req.write(reqBody);

req.end();

var server = app.listen(4000, function() {});