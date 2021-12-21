const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const countries = require("../db/countries.js");

function init(app) {
  app.get("/countries", (req, res) => {
    console.log("requested!!");

    res.status(200);
    res.send(countries);
  });
}

module.exports = init;
