var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

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
};

app.use(allowCrossDomain);

app.get('/', function(request, response){
  response.send(JSON.stringify(messageData));
});

app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended: true}));


app.post('/', function(request, response){
  // messageData.results.push(request.body);
  // console.log(request.body); 
  response.send(JSON.stringify(messageData));
});