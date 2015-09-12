var models = require('../models');
//this is our request-handler file, essentially. Or, consider it our controller, as in "MVC" Controller

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log(res, ' get request model');
      models.messages.get(function(results){
        //assemble the JSON
        res.send(results);
      });
    }, 
    post: function (req, res) {
      var message = req.body;
      //console.log(message, " " ,typeof message, ' message');
      models.messages.post(message, function(results){
        res.send(results);
        //console.log(results);
      });
    } 
  },

  users: {
    
    get: function (req, res) {
      models.users.get(function(results){
        // console.log(res.body, ' get request users');
        res.send(results);
        // console.log(results);
      })

    }, 
    post: function (req, res) {
      var user = req.body;
      //console.log(user, " ", typeof user, ' user');

      models.users.post(user, function(results){
        res.send(results);
      });
    }
  }
};

