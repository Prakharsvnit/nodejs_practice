var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';
var str = "";

app.route('/Employeeid').get(function(req, res)

    {
        MongoClient.connect(url, function(err, db) {
            var cursor = db.collection('Employee').find();

            cursor.each(function(err, item) {

                if (item != null) {
                    str = str + "    Employee id  " + item.Employeeid + "</br>";
                }
            });
            res.send(str);

        });
    });

var server = app.listen(5000, function() {});