//Your htmlRoutes.js file should include two routes:
//A GET Route to /survey which should display the survey page.
//A default, catch-all route that leads to home.html which displays the home page.

//Set up path to html
var path = require("path");

//router
module.exports = function(app) {

    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

   // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
 