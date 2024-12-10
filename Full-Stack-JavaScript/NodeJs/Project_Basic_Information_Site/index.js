var http = require('http');

http.createServer(function(req,res){
    res.write('Welcome to informational site');
    res.end();
}).listen(8080)