var express = require('express');
var app = express();

//defining port number for app
var port = 8005;
var server = http.createServer(app);
server.listen(port);
server.on('listening',function() {
    console.log(`${port}`);
});