var friendsList = require("../data/friends.js");

module.exports = function(app){
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function(req, res) {
    //put code for adding to friendslist here
  });
};
