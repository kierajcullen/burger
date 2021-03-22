var orm = require("../config/orm.js");
// do not include connection
var burgers = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (vals, cb) {
    orm.insertOne(vals, function (res) {
      cb(res);
    });
  },

  updateOne: function (vals, cb) {
    orm.updateOne(vals, function (res) {
      cb(res);
    });
  },

  deleteOne: function (vals, cb) {
    orm.deleteOne(vals, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
