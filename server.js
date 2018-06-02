// Dependinces 
var express = require("express");
var bodyParser = require("body-parser")
var path = require("path");


// Sets up path to Express app 
var app = express();
var PORT = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function(req,res) {
    res.sendFile(path.join(_dirname,"home.html"));
    console.log("Your are in the Home page");
});

app.get("/survey", function(req,res){
    res.sendFile(path.join(_dirname, "survey.html"))
    console.log("You are in the Survey Page");
})

app.get("/api/friends" ,function(req, res){
    res.render
})

app.listen(PORT, function(){
    console.log("listening on Local Host Port: " + PORT)
});