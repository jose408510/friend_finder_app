//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic.
// Dependinces 
var friendsList = require("../app/data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    })

    app.post("/api/friends", function (req, res) {
        // Send back the ID of the new todo
        var newFriend = req.body;

        // res.send()
        var bestMatch = {
            name: "",
            photo: "",
            difScore: 5000
        };
        var totalDif = 0;

        for (var i = 0; i < friendsList.lenght; i++) {
            var currentFriend = friendsList[i];
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentUserScore = newFriend.scores[j];
                var currentFriendScore = currentFriend.scores[j]
                totalDif += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }
            totalDif = 20



            if (totalDif <= bestMatch.difScore) {
                bestMatch.name = currentFriend.name
                bestMatch.photo = currentFriend.photo
                bestMatch.difScore = totalDif
            }
        }
        // add the new friend sent from survey.html to the friends list array
        friendsList.push(newFriend);
        //send the bestMatch back to survey.html
        res.json(bestMatch);

    });
}








