var db = require('../db');
//The "Model" in "MVC"

module.exports = {
  messages: {
    get: function (res) {
      db.connection.query({
        sql: "SELECT u.name, m.message FROM messages m INNER JOIN users u ON (m.user_id = u.id);",
        timeout: 40000 //timout of 40 seconds,  
        }, function(error, results, fields){ //fields is an optional parameter
          if(error) {
            console.log(error); 
          } else {
            //need to get the results to the other functions in models
            res.send(results); 
          }
        } 
      );
    }, // a function which produces all the messages
    post: function (message, user) {
      // a function which can be used to insert a message into the database
      db.connection.query({
        sql: "INSERT INTO messages;",
        timeout: 40000 //timout of 40 seconds,  
        }, function(error, results, fields){ //fields is an optional parameter
          if(error) {
            console.log(error); 
          } else {
            //need to get the results to the other functions in models
            res.send(results); 
          }
        } 
      );
    } 
  },

  users: {
    get: function (res) {
      db.connection.query({
        sql: "SELECT u.name, m.message FROM messages m INNER JOIN users u ON (m.user_id = u.id);",
        timeout: 40000 //timout of 40 seconds,  
        }, function(error, results, fields){ //fields is an optional parameter
          if(error) {
            console.log(error); 
          } else {
            //need to get the results to the other functions in models
            res.send(results); 
          }
        } 
      );
    },
    post: function (user) {
       db.connection.query({
        sql: "INSERT INTO messages;",
        timeout: 40000 //timout of 40 seconds,  
        }, function(error, results, fields){ //fields is an optional parameter
          if(error) {
            console.log(error); 
          } else {
            //need to get the results to the other functions in models
            res.send(results); 
          }
        } 
      );

    }
  }
};

