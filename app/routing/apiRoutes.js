var friendsList = require("../data/friends.js");

module.exports = function(app){
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function(req, res) {
    //put code for adding to friendslist here
    var newFriend = req.body;
    console.log(newFriend);

    // calculate score
    foundFriend = findNearestFriend(newFriend);

    friendsList.push(newFriend);
    res.json(foundFriend);

  });
};


function findNearestFriend(friend){
  var minDiff = 500;
  var bestFriendList = [];
  for(var f in friendsList){
    comparisonFriend = friendsList[f];
    var diff = 0;
    for(var i=0; i<friend.scores.length; i++){
      diff += Math.abs(parseInt(friend.scores[i])-parseInt(comparisonFriend.scores[i]));
    }
    //If it's less, that becomes the best friend, and the min difference changes
    if(diff<minDiff){
      bestFriendList = [comparisonFriend];
      minDiff = diff;
    }
    //if the scores match, store with friends of matching score
    else if(diff === minDiff){
      bestFriendList.push(comparisonFriend);
    }
  }
  //return a random friend of the best score; this is to avoid favoring friends who are early in the friendslist array.
  return bestFriendList[Math.floor(Math.random()*bestFriendList.length)];
}
