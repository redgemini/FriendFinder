//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 80801;

// Sets up Express app to handle data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Router path
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listner
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

