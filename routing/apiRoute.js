//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic.
var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

var friends = [{
    name: "Ahmed",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    scores: [1,3,4,5,6,7,8,1]
},
    // name:"",
    // photo:"",
    // scores:[1,2,3,3,4,5,6,7]


]


app.get("/api/friends" ,function(req, res){
    res.render
})

app.listen(PORT, function(){
    console.log("listening on Local Host Port: " + PORT)
});