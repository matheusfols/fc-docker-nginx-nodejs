const migration = require("mysql-migrations");
const connection = require("./db/dbConnection");

migration.init(connection, __dirname + "/migrations");
