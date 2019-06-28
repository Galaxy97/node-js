const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

data_s = ["hello", "my", "dear", "friend"];

app.get("/", (req, res) => res.render("index", { data: data_s }));

app.get("/about/:id", (req, res) => {
  res.send(req.params.id);
});
app.get("/about", (req, res) => {
  res.send(req.query.some);
});
app.get("/test", function(req, res) {
  res.render("test");
});
app.post("/test", function(req, res) {
  res.send("POST request " + req.body.text);
});

app.listen(port, () => console.log("Example app listening on port port!"));
