var express = require("express");
var bodyParser = require("body-parser");

// Create Express
var app = express();

//Set up Port
var PORT = process.env.PORT || 8080;

// Express Set Up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routing
require("./app/routing/apiRoutes")(app);
//require("./routing/htmlRoutes.js")(app);

//Listen to start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
