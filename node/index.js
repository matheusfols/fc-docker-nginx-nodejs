const express = require("express");
const app = express();
const connection = require("./db/dbConnection");
const bodyParser = require("body-parser");

const sql = `INSERT INTO people(name) values('Wesley')`;
connection.query(sql);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set("view engine", "ejs");

app.post("/add", (req, res) => {
	const name = req.body.name;
	connection.query(
		"INSERT INTO `people` (name) VALUES (?)",
		name.toString(),
		(err, result) => {
			if (err) throw err;
			console.log("1 record inserted");
		}
	);
	return res.redirect("/");
});

// index page
app.get("/", function (req, res) {
	const search = `SELECT * FROM people`;
	connection.query(search, (error, results) => {
		if (error) throw error;
		res.render("pages/index", { listPeople: results });
	});
});

app.listen(5000, () => console.log("Server is up and running"));
