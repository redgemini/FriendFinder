//Your apiRoutes.js file should contain two routes:
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results.
//This route will also be used to handle the compatibility logic.

//Require friends
var friends = require("../data/friends");

//Route
module.exports = function(app) {

//Get API requests
app.get("/api/friends", function(req, res) {
  res.json(friends);
});

app.post("/api/friends", function(req, res) {
  // loop through all of the options for a friend match
  var friendMatch = {
    name: "",
    photo: "",
    friendDifference: Infinity
  };

  // Pull in the user"s survey POST and parse it.
  var userData = req.body;
  var userScores = userData.scores;

  var totalDifference;

  // loop through database
  for (var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    totalDifference = 0;

    console.log(currentFriend.name);

    // loop through all the scores of each friend
    for (var j = 0; j < currentFriend.scores.length; j++) {
      var currentFriendScore = currentFriend.scores[j];
      var currentUserScore = userScores[j];

      // the totalDifference
      totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore)
      );
    }
    // If the sum of differences is less then the differences of the current "friend match"
    if (totalDifference <= friendMatch.friendDifference) {
      // Reset the friendMatch to be the new friend.
      friendMatch.name = currentFriend.name;
      friendMatch.photo = currentFriend.photo;
      friendMatch.friendDifference = totalDifference;
    }
  }

  friends.push(userData);

  // Return a JSON with the friendMatch.
  res.json(friendMatch);
});
};
