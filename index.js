const express = require("express");
const app = express();
const port = 3000;

app.set("view engine","ejs");

data_s = ["hello", "my", "dear", "friend"];

app.get("/", (req, res) => res.render("index",{data:data_s}));

app.listen(port, () => console.log("Example app listening on port port!"));