var models = require('../models');
//this is our request-handler file, essentially

module.exports = {
  messages: {
    get: function (req, res) {
      //write a callback that gets the data going in the other direction, back to the server from the database. 
      models.messages.get(function(results){  
        //these are the results from the database
        //write the results into the response and fire it back to the server
        res.send(results);        

      }); 
      // a function which handles a get request for all messages
    }, 
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(results){
        res.send(results);
      });
    }, 
    post: function (req, res) {}
  }
};

