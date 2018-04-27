//Your server.js file should require the basic npm packages we've used in class: express, body-parser and path

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8081;

// Sets up Express app to handle data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Router path
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

//Listen
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

