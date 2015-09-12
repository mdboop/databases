var models = require('../models');
//this is our request-handler file, essentially. Or, consider it our controller, as in "MVC" Controller

module.exports = {
  messages: {
    get: function (req, res) {
      // console.log(res, ' get request model');
      models.messages.get(function(results){

        res.send(results);
      });
    }, 
    post: function (req, res) {
      var message = req.body;
      models.messages.post(message, function(results){
        res.send(results);
      });
    } 
  },

  users: {
    
    get: function (req, res) {
      models.users.get(function(results){
        res.send(results);
      })

    }, 
    post: function (req, res) {
      var user = req.body;
      models.users.post(user, function(results){
        res.send(results);
      });
    }
  }
};

