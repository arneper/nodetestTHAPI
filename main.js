var http = require("http");
var os = require('os');
var PORT;


if (os.hostname().indexOf("local">-1)) {
    const hostname= '127.0.0.1';
    PORT = 3000;

} else {
    PORT = process.env.PORT || 5000;
}


http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello AP , how are you? \n');
}).listen(PORT, () => {
    console.log('Server running on ${PORT}/');
});

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');
