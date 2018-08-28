var express = require("express");

var app = express.Router();


var burger = require("../models/burger.js");
app.put("/:id", function(req, res) {
    var con = "id = " + req.params.id;
    console.log("con", con);
    burger.update({
        devoured: req.body.devoured
    }, con, function() {
        res.redirect("/");
    });
});
app.post("/", function(req, res) {
    burger.create([
        "burger_name"
    ], [
        req.body.name
    ], function() {
        res.redirect("/");
    });
});
app.get("/", function(req, res) {
    burger.all(function(data) {
        var hbs = {
            burgers: data
        };
        console.log(hbs);
        res.render("index", hbs);
    });
});




module.exports = app;