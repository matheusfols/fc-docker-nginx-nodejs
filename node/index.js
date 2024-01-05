const express = require("express");

const app = express();
// set the view engine to ejs
app.set("view engine", "ejs");

// index page
app.get("/", function (req, res) {
	res.render("pages/index");
});

app.listen(5000, () => console.log("Server is up and running"));
