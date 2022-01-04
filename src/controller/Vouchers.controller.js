const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const vouchers = require("../db/vouchers.json");
const filterProducts = require("../utils/filters.js");

function init(app) {
  app.get("/vouchers", (req, res) => {
    console.log("requested");

    res.status(200);
    res.send(vouchers);
  });

  app.get("vouchers/countries", function (req, res) {
    const id = +req.query.id;
    const filteredVouchers = vouchers.filter((v) => v.countryId === id);
    console.log("filteredId", id);

    if (!!filteredVouchers.length) {
      res.status(200);
      res.send(filteredVouchers);
    }

    app.post("/vouchers/filtered", jsonParser, (req, res) => {
      filterProducts(vouchers, req.body, res);
    });

    res.status(400);
    res.send({ error: "Vouchers is not avaliable..." });
  });
}

module.exports = init;
