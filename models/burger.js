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

  updateOne: function (vals, condition, cb) {
    // orm.updateOne(vals, function (res) {
    //   cb(res);
    // });
    // burgers will be set by the model\
    orm.updateOne("burgers", vals, condition, cb);
  },

  deleteOne: function (vals, cb) {
    orm.deleteOne(vals, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
