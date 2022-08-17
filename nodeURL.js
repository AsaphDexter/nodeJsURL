//---------------------------------------- Node.js URL Module ----------------------------------------
/*The Built-in URL Module
The URL module splits up a web address into readable parts.
To include the URL module, use the require() method:
var url = require('url');
Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:*/

/*
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2022&month=August';
//Parse the address:
var q = url.parse(adr, true);
/*The parse method returns an object containing url properties*/
//console.log(q.host); //returns 'localhost:8080'
//console.log(q.pathname); //returns '/default.htm'
//console.log(q.search);//returns '?year=2022&month=August'

/*The query property returns an object with all the querystring parameters as properties:*/
//var qdata = q.query;
//console.log(qdata.month);*/

//------------------------------------ Node.js File Server ------------------------------------
//Now we know how to parse the query string, and in the previous commit we learned how to make Node.js behave as a file server. Let us combine the two, and serve the file requested by the client.
//Create two html files and save them in the same folder as your node.js files.

var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

//If you have followed the same steps on your computer, you should see two different results when opening these two addresses:

http://localhost:8080/coco.html
http://localhost:8080/strawberry.html