var orm = require("../config/orm.js");
// do not include connection
var burgers = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (col1, col2, colValue1, colValue2, cb) {
    orm.insertOne(col1, col2, colValue1, colValue2, function (res) {
      cb(res);
    });
  },

  updateOne: function (col1, col1Value, col2, col2Value, cb) {
    orm.updateOne(col1, col1Value, col2, col2Value, function (res) {
      cb(res);
    });
  },

  deleteOne: function (col1, col1Value, cb) {
    orm.deleteOne(col1, col1Value, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
