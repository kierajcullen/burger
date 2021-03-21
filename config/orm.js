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

  insertOne: function (col1, col2, colValue1, colValue2, cb) {
    let query = "INSERT INTO burgers (??, ??) VALUES(??,??)";
    connection.query(query, [col1, col2, colValue1, colValue2], (err, res) => {
      if (err) console.log(err);
      cb(res);
    });
  },

  updateOne: function (col1, col1Value, col2, col2Value, cb) {
    let query = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
    connection.query(query, [col1, col1Value, col2, col2Value], (err, res) => {
      if (err) console.log(err);
      cb(res);
    });
  },

  deleteOne: function (col1, col1Value, cb) {
    let query = "DELETE FROM burgers WHERE ?? = ?";
    connection.query(query, [col1, col1Value], (err, res) => {
      if (err) console.log(err);
      cb(res);
    });
  },
};
