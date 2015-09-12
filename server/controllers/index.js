var models = require('../models');
//this is our request-handler file, essentially. Or, consider it our controller, as in "MVC" Controller

module.exports = {
  messages: {
    get: function (req, res) {
      //write a callback that gets the data going in the other direction, back to the server from the database. 
      models.messages.get(res);
      console.log(res.body, " is res");
      // a function which handles a get request for all messages
    }, 
    post: function (req, res) {
      console.log("OMG THIS IS REQ BODY, MESSAGES: ", req.body);
      var data = json.parse(req.body);
      var message = data.message;
      var user = data.user;
      var room = data.roomname;
      models.messages.post(message, user, roomname);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users: ', res.body)
      models.users.get(res);
    }, 
    post: function (req, res) {
      console.log("OMG THIS IS REQ BODY USER: ", req.body);
    }
  }
};

