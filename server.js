// Dependinces 
var express = require("express");
var bodyParser = require("body-parser")
var path = require("path");


// Sets up path to Express app 
var app = express();
var PORT = process.env.PORT || 3366;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/apiRoute")(app);  
require("./routing/htmlRoute")(app);  

app.listen(PORT, function(){
    console.log("listening on Local Host Port: " + PORT)
});