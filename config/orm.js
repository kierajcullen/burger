// once we use sequelize, this will autogenerate
var connection = require("./connection.js");

// pass in table
// you take in the values within the array
module.exports = {
  selectAll: function (table, cb) {
    let query = "SELECT * FROM ??";
    connection.query(query, [table], (err, res) => {
      if (err) console.log(err);
      cb(res);
    });
  },

  insertOne: function (vals, cb) {
    let query = "INSERT INTO burgers (??, ??) VALUES(?,?)";
    connection.query(query, vals, (err, res) => {
      if (err) console.log(err);
      cb(res);
    });
  },

  updateOne: function (vals, cb) {
    let query = "UPDATE burgers SET ? = ? WHERE ? = ?";
    connection.query(query, vals, (err, res) => {
      if (err) console.log(err);
      cb(res);
    });
  },

  deleteOne: function (vals, cb) {
    let query = "DELETE FROM burgers WHERE ?? = ?";
    connection.query(query, [vals], (err, res) => {
      if (err) console.log(err);
      cb(res);
    });
  },
};
