var db = require('../db');

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
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
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
    post: function () {}
  }
};

