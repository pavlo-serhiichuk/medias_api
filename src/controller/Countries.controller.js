const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const countries = require("../db/countries.json");

function init(app) {
  app.get("/countries", jsonParser, (req, res) => {
    console.log("requested!!");

    res.status(200);
    res.send(countries);
  });
}

module.exports = init;
