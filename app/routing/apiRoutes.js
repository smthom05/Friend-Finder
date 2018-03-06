// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var bodyParser = require("body-parser");
var friends = require("../data/friends.js");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.send();
  });

  app.post("/api/friends", function(req, res) {
    const newFriend = req.body;
    const newScores = req.body.scores;
    let totalDifference;
    res.json(newFriend);
    // console.log(friends);

    let dummyBuddy = {
      "name": "",
      "photo": "",
      "variance": 100
    };

    for (var i = 0; i < friends.length; i++) {
        let currentFriend = friends[i];
        totalDifference = 0;
      console.log(currentFriend);

      for (var z = 0; z < currentFriend.scores.length; z++) {
        let currentFriendScore = parseInt(currentFriend.scores[z]);
        let newFriendScore = parseInt(newScores[z]);
        totalDifference += Math.abs(currentFriendScore - newFriendScore);
      }
      if (totalDifference < dummyBuddy.variance){
        currentFriend = dummyBuddy;

      }
      console.log(dummyBuddy.name);
      console.log(totalDifference);
    }
    friends.push(newFriend);
  });
};
