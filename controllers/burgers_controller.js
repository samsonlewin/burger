var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insert( 
    req.body.name
  , function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = req.params.id;

  console.log("condition", condition);

  burger.update(
    condition,
  function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;