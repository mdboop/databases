var models = require('../models');
//this is our request-handler file, essentially. Or, consider it our controller, as in "MVC" Controller

module.exports = {
  messages: {
    get: function (req, res) {
      //write a callback that gets the data going in the other direction, back to the server from the database. 
      console.log(res, " is res");
      models.messages.get(res);
      // a function which handles a get request for all messages
    }, 
    post: function (req, res) {
      console.log("OMG THIS IS REQ BODY, MESSAGES: ", req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(res);
    }, 
    post: function (req, res) {
      console.log("OMG THIS IS REQ BODY: ", req.body);
    }
  }
};

