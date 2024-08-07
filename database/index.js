const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Janiketh2003",
  database: "dbms",
});

setInterval(function () {
  db.query('SELECT * from bus');
  console.log("Database alive");
}, 5000);


module.exports = db;
