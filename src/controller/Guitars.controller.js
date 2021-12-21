const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const guitars = require("../db/guitars.js");
const filterProducts = require("../utils/filters.js");

function init(app) {
  app.get("/guitars", (req, res) => {
    console.log("requested");

    res.status(200);
    res.send(guitars);

    app.post("/guitars/filtered", jsonParser, (req, res) => {
      console.log(req.body);
      filterProducts(guitars, req.body, res);
    });
  });
}

module.exports = init;
