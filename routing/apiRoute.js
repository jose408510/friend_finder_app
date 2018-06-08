//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic.
// Dependinces 
var friendsList = require("../app/data/friends"); 

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
    })

    app.post("/api/friends", function(req, res) {
        // Send back the ID of the new todo
        console.log(req.body);


        res.json(friendsList.friendsList[0]);
  });
}





  


