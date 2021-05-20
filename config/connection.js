// set up code to connect Node to Mysql
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Xptklmnr102*",
    database: "burgersDB",
  });
}

//  make the connection
connection.connect(function (err) {
  if (err) {
    console.error("Error: " + err.stack);
    return;
  }
  console.log("Connected as ID: " + connection.threadId);
});

// export connection to ORM
module.exports = connection;
