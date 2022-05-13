const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const https = require("https");

const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/skills", function(req, res) {
  res.render("skills");
});

app.get("/projects", function(req, res) {
  res.render("projects");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/experience", function(req, res) {
  res.render("experience");
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});
