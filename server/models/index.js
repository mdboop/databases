var db = require('../db');
//The "Model" in "MVC"

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query({
        sql: "SELECT u.name, m.message, m.room FROM messages m INNER JOIN users u ON (m.user_id = u.id);",
        timeout: 40000 //timout of 40 seconds,  
        }, function(error, results){ //fields is an optional parameter
          if(error) {
            console.log(error); 
          } else {
            //need to get the results to the other functions in models
            callback(results); 
          }
        } 
      );
    }, 

    post: function (data, callback) {
      db.connection.query({
        sql: "INSERT INTO messages (message, user_id, room) values (?, (SELECT id FROM users WHERE name=?), ?);",
        timeout: 40000,
        values: [data.message, data.username, data.roomname]  
        }, function(error, results){ 
          if(error) {
            console.log(error); 
          } else {
            //need to get the results to the other functions in models
            callback(results); 
          }
        } 
      );
    } 
  },

  users: {
    get: function (callback) {
      db.connection.query({
        sql: "SELECT name FROM users",
        timeout: 40000   
        }, function(error, results){ 
          if(error) {
            console.log(error); 
          } else {
            //need to get the results to the other functions in models
            callback(results); 
          }
        } 
      );
    },
    post: function (data, callback) {
      db.connection.query({
        sql: "INSERT INTO users (name) values (?);",
        timeout: 40000,   
        values: [data.username]
        }, function(error, results){ 
          if(error) {
            console.log(error); 
          } else {
            //need to get the results to the other functions in models
            callback(results); 
          }
        } 
      );

    }
  }
};

