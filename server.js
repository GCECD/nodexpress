var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello to the World.... from India!");
}
var www = http.createServer(handleRequest);
www.listen(8080);