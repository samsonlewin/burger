var express = require("express");
var override = require("method-override");
var bodyparser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyparser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(override("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);