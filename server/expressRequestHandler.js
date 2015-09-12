//express-basic-server.js

// var messageData = {results: [{
//   username: "Fred",
//   text: "Wut does the fox say??"
// }
// ]};


// var express = require('express'); 
// var bodyParser = require('body-parser');
// var application = express(); 

// var server = application.listen(8080, function(){
//   var host = server.address().address; 
//   var port = server.address().port;
//   console.log('Example application listening at http://%s:%s', host, port);
// });

//this is EXACTLY our router. Phew. 
var urlObj = {
  '/classes/messages': true, 
  '/classes/room': true,
  '/classes/room1': true, 
  '/?order=-createdAt': true
}; 

var allowCrossDomain = function(request, response, next){
  response.header( "access-control-allow-origin", "*");
  response.header( "access-control-allow-methods", "GET, POST, PUT, DELETE, OPTIONS" );
  response.header( "access-control-allow-headers", "content-type, accept" );
  response.header( "access-control-max-age", 10); // Seconds. 
  response.header( "Content-Type", "application/json" );
  if('OPTIONS' === request.method){
    response.sendStatus(200); 
  } else {
    next(); 
  }
}

application.use(allowCrossDomain);

application.get('/', function(request, response){
  response.send(JSON.stringify(messageData));
});


application.use(bodyParser.json()); 
// application.use(bodyParser.urlencoded({extended: true}));


application.post('/', function(request, response){
  messageData.results.push(request.body);
  console.log(request.body); 
  response.send(JSON.stringify(messageData));
});
