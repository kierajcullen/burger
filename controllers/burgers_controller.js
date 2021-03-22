var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll((response) => {
    res.render("index", { burgers: response });
    console.log(response);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured", req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  console.log(req.body);
  burger.updateOne(
    ["devoured", req.body.devoured, "id", req.params.id],
    function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  //console.log("condition", condition);
  burger.deleteOne(condition, (data) => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
