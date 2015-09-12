var express = require('express');
var db = require('./db');
var controller = require('./controllers');

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

var allowCrossDomain = function(req, res, next){
  res.header( "access-control-allow-origin", "*");
  res.header( "access-control-allow-methods", "GET, POST, PUT, DELETE, OPTIONS" );
  res.header( "access-control-allow-headers", "content-type, accept" );
  res.header( "access-control-max-age", 10); // Seconds. 
  res.header( "Content-Type", "application/json" );
  if('OPTIONS' === req.method){
    res.sendStatus(200); 
  } else {
    next(); 
  }
};

app.use(allowCrossDomain);


app.use(parser.json()); 
// app.use(bodyParser.urlencoded({extended: true}));


//The server is the view, in MVC? 
app.get('/messages', function(req, res){
  console.log('sending to controller');
  controller.messages.get(); 
  controller.users.get(); 
  res.end();
});

app.post('/messages', function(req, res){
  console.log('getting from controller?'); 
  controller.messages.post();
  controller.users.post(); 
});
