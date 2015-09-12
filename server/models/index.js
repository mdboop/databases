var db = require('../db');
//The "Model" in "MVC"

module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query({
        sql: "SELECT u.name, m.message FROM messages m INNER JOIN users u ON (m.user_id = u.id);",
        timeout: 40000 //timout of 40 seconds,  
        }, function(error, results, fields){ //fields is an optional parameter
          if(error) {
            console.log(error); 
          } else {
            //need to get the results to the other functions in models
            callback(results); 
          }
        } 
      );
    }, // a function which produces all the messages
    post: function (data, callback) {
      var user = data.username; 
      var message = data.message; 
      var roomname = data.roomname; 
      // a function which can be used to insert a message into the database
      var queryString = "INSERT INTO messages (message, time, user_id, room_id) values ('" + message + "', '002', (SELECT id FROM users WHERE name='" + user + "'), (SELECT id FROM rooms WHERE room='"+ roomname +"'));";
      console.log(queryString);
      db.connection.query({
        //insert into messages (message, time, user_id, room_id) values ('hello', '002', (SELECT id FROM users WHERE name='fred'), (SELECT id FROM rooms WHERE room='lobby'));
        sql: queryString,
        timeout: 40000 //timout of 40 seconds,  
        }, function(error, results, fields){ //fields is an optional parameter
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
        sql: "SELECT u.name, m.message FROM messages m INNER JOIN users u ON (m.user_id = u.id);",
        timeout: 40000 //timout of 40 seconds,  
        }, function(error, results, fields){ //fields is an optional parameter
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
      var user = data.username; 
      var queryString = "INSERT INTO users (name) values ('" + user + "');"
      console.log(queryString);
       db.connection.query({
        sql: queryString,
        timeout: 40000 //timout of 40 seconds,  
        }, function(error, results, fields){ //fields is an optional parameter
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

